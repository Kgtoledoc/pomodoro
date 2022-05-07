import { importExpr } from "@angular/compiler/src/output/output_ast";
import { Component } from "@angular/core";
import { LocalNotifications } from "@capacitor/local-notifications";
import { NavigationExtras, Router } from "@angular/router";

import { NativeAudio } from "@ionic-native/native-audio/ngx";
import {
  AlertController,
  ModalController,
  NavController,
  Platform,
  ToastController,
} from "@ionic/angular";
import { v4 as uuidv4 } from "uuid";
import { NewTasksPage } from "../pages/new-tasks/new-tasks.page";


@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  scheduledTasks: Array<any>;

  constructor(
    public modalController: ModalController,
    private alertController: AlertController,
    private toastCtrl: ToastController,
    private nativeAudio: NativeAudio, //private localNotifications: LocalNotifications
    private navController: NavController,
    private platform: Platform,
    private router: Router,

  ) { }

  async ngOnInit() {
    console.log("INSIDE NGONINIT");
    await LocalNotifications.requestPermissions();

    this.scheduledTasks = JSON.parse(localStorage.getItem("scheduledTasks"))
      ? JSON.parse(localStorage.getItem("scheduledTasks"))
      : [];
    this.scheduledTasks = this.sortArray(this.scheduledTasks);
    this.transformDate();
    if (this.scheduledTasks.length > 0) {
      this.scheduleBasicAllTasks();
    }
  }

  ionViewDidEnter() {
    console.log("IONVIEWDIDENTER");

    this.scheduledTasks = JSON.parse(localStorage.getItem("scheduledTasks"))
      ? JSON.parse(localStorage.getItem("scheduledTasks"))
      : [];

    this.scheduledTasks = this.sortArray(this.scheduledTasks);

    this.transformDate();

    console.log("Scheduled Task ", this.scheduledTasks);
  }

  delete(item) {
    this.scheduledTasks = this.scheduledTasks.filter((e) => {
      return item.id != e.id;
    });
    localStorage.setItem("scheduledTasks", JSON.stringify(this.scheduledTasks));
  }

  transformDate() {
    let dateNow = new Date(Date.now()).toDateString();

    this.scheduledTasks.forEach((task) => {
      if (task.date != undefined) {
        if (dateNow != new Date(task.date).toDateString()) {
          task.date = new Date(
            dateNow + " " + new Date(task.date).toTimeString()
          );
        }
      }
    });
    localStorage.setItem("scheduledTasks", JSON.stringify(this.scheduledTasks));
  }

  scheduledFunction(task) {
    LocalNotifications.schedule({
      notifications: [
        {
          title: task.title,
          body: task.title,
          id: Math.random() * 100,
          extra: {
            data: "Pass data to your handler",
          },
          iconColor: "#0000FF",
          schedule: {
            at: new Date(task.date),
          },
        },
      ],
    });
  }

  async scheduleOneTask(task) {
    if (new Date(task.date).getTime() >= new Date(Date.now()).getTime()) {
      this.presentToast("Actividades programadas");
      this.scheduledFunction(task);
    } else {
      this.presentToast("Tiempo es menor al actual. Actividad no programada");
    }
  }

  async scheduleBasicAllTasks() {
    console.log("Schedule all tasks!");
    let counter = 0;
    this.scheduledTasks.forEach((e) => {
      if (new Date(e.date).getTime() >= new Date(Date.now()).getTime()) {
        this.scheduledFunction(e);
        counter++;
      }
    });
    if (counter > 0) {
      this.presentToast("Actividades programadas");
    } else {
      this.presentToast("Actividades no programadas");
    }
  }

  async addTasks() {
    const modal = await this.modalController.create({
      component: NewTasksPage,
    });
    modal.onDidDismiss().then((d) => {
      console.log(d);
      if (d.data["dismissed"] != true) {
        if (d.data.date == undefined) {
        } else {
          this.scheduledTasks.push(d.data);
          this.scheduledTasks = this.sortArray(this.scheduledTasks);
          localStorage.setItem(
            "scheduledTasks",
            JSON.stringify(this.scheduledTasks)
          );
          if (d.data.date != undefined) {
            this.scheduleOneTask(d.data);
          } else {
            console.log("Not scheduled!");
          }
        }
      }
      //console.log(this.tasks);
    });

    return await modal.present();
  }

  check(task) {
    if (task.date == undefined) {
      /*  this.noScheduledTasks = this.noScheduledTasks.filter((e) => {
        return task.id != e.id;
      });
      this.noScheduledTasks.push(task); */
    }

    localStorage.setItem("scheduledTasks", JSON.stringify(this.scheduledTasks));

    /* localStorage.setItem(
      "noScheduledTasks",
      JSON.stringify(this.noScheduledTasks)
    ); */
  }

  sortArray(array) {
    //console.log("Sort Array");
    array.sort((a, b) => {
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
    //console.log(array);
    return array;
  }

  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: "bottom",
    });

    toast.present();
  }

  openTask(task) {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(task),
      },
    };

    console.log(navigationExtras);
    this.router.navigate(["/tasks/task-detail"], navigationExtras);
  }


}

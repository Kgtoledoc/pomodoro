import { importExpr } from "@angular/compiler/src/output/output_ast";
import { Component } from "@angular/core";
import { NavigationExtras, Router } from "@angular/router";
import { LocalNotification, Plugins } from "@capacitor/core";
import { NativeAudio } from "@ionic-native/native-audio/ngx";
import {
  AlertController,
  ModalController,
  NavController,
  ToastController,
} from "@ionic/angular";
import { v4 as uuidv4 } from "uuid";
import { NewTasksPage } from "../pages/new-tasks/new-tasks.page";
//import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
const { LocalNotifications } = Plugins;

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  scheduledTasks: Array<any>;
  state: string = "";

  constructor(
    public modalController: ModalController,
    private alertController: AlertController,
    private toastCtrl: ToastController,
    private nativeAudio: NativeAudio, //private localNotifications: LocalNotifications
    private navController: NavController,
    private router: Router
  ) {
    console.log("INSIDE CONTRUCTOR");
  }

  async ngOnInit() {
    console.log("INSIDE NGONINIT");
    await LocalNotifications.requestPermission();
    this.state = "ngOnInit";

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

  showNotification(text) {
    LocalNotifications.schedule({
      notifications: [
        {
          title: text.title,
          body: text.body,
          id: uuidv4(),
          extra: {
            data: "Pass data to your handler",
          },
          iconColor: "#0000FF",
        },
      ],
    });
  }

  delete(item) {
    if (item.date == undefined) {
      /* 
      this.noScheduledTasks = this.noScheduledTasks.filter((e) => {
        return item.id != e.id;
      });
      localStorage.setItem(
        "noScheduledTasks",
        JSON.stringify(this.noScheduledTasks)
      ); */
    } else {
      this.scheduledTasks = this.scheduledTasks.filter((e) => {
        return item.id != e.id;
      });
      localStorage.setItem(
        "scheduledTasks",
        JSON.stringify(this.scheduledTasks)
      );
    }
  }

  transformDate() {
    //console.log("Transform Date");
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
          body: task.description,
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
      this.presentToast("Task is scheduled");
      this.scheduledFunction(task);
    } else {
      this.presentToast("The time is less that current time");
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
      this.presentToast("Scheduled all task greater than actual time!");
    } else {
      this.presentToast("Tasks is not scheduled!");
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
          if (d.data.isScheduled == true) {
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

// Following tasks

// checked when the time of schedule is finished
// Fix the timer and try to integrate the pomodore inside the tasks, like an icon.
// Launch the schedule automatic when init the task

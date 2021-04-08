import { importExpr } from "@angular/compiler/src/output/output_ast";
import { Component } from "@angular/core";
import { LocalNotification, Plugins } from "@capacitor/core";
import { ModalController } from "@ionic/angular";
import { ExploreContainerComponent } from "../explore-container/explore-container.component";
import { NewTasksPage } from "../pages/new-tasks/new-tasks.page";
//import { LocalNotifications } from "@ionic-native/local-notifications/ngx";
const { LocalNotifications } = Plugins;

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  public tasks: Array<any>;

  constructor(
    public modalController: ModalController //private localNotifications: LocalNotifications
  ) {}

  async ngOnInit() {
    this.tasks = JSON.parse(localStorage.getItem("tasks"))
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];

    console.log(this.tasks);

    //await this.localNotifications.requestPermission();
    await LocalNotifications.requestPermission();
  }

  delete(item) {
    console.log(item);
    this.tasks = this.tasks.filter((e) => {
      return item.id != e.id;
    });

    console.log(this.tasks);
    localStorage.setItem("tasks", JSON.stringify(this.tasks));
  }
  async scheduleOneTask(task) {
    console.log("Schedule the Task");
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

  async scheduleBasicAllTasks() {
    console.log("Schedule all tasks!");

    this.tasks.forEach((e, index) => {
      //console.log(new Date(e.date));
      LocalNotifications.schedule({
        notifications: [
          {
            title: e.title,
            body: e.description,
            id: index + 1,
            extra: {
              data: "Pass data to your handler",
            },
            iconColor: "#0000FF",
            schedule: {
              at: new Date(e.date),
            },
          },
        ],
      });
    });
  }

  loadTheNotifications() {
    //this.scheduleBasic();
  }

  async addTasks() {
    const modal = await this.modalController.create({
      component: NewTasksPage,
    });
    modal.onDidDismiss().then((d) => {
      console.log(d);
      if (d.data["dismissed"] != true) {
        this.tasks.push(d.data);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
        if (d.data.isScheduled == true) {
          this.scheduleOneTask(d.data);
        } else {
          console.log("Not scheduled!");
        }
      }
      //console.log(this.tasks);
    });

    return await modal.present();
  }
}

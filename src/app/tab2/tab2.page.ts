import { Component } from "@angular/core";
import { LocalNotification, Plugins } from "@capacitor/core";
import { ModalController } from "@ionic/angular";
import { ExploreContainerComponent } from "../explore-container/explore-container.component";
import { NewTasksPage } from "../pages/new-tasks/new-tasks.page";
const { LocalNotifications } = Plugins;
@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  public tasks: Array<any>;

  constructor(public modalController: ModalController) {}

  async ngOnInit() {
    this.tasks = JSON.parse(localStorage.getItem("tasks"))
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];

    console.log(this.tasks);

    await LocalNotifications.requestPermissions();
  }

  delete(item) {
    console.log(item);
  }

  async scheduleBasic() {
    console.log("Schedule the tasks!");
    this.tasks.forEach((e, index) => {
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
              at: new Date(Date.now() + 1000 * ((index + 1) * 5)),
            },
          },
        ],
      });
    });
  }

  loadTheNotifications() {
    this.scheduleBasic();
  }

  async addTasks() {
    //this.scheduleBasic();
    const modal = await this.modalController.create({
      component: NewTasksPage,
    });
    modal.onDidDismiss().then((d) => {
      console.log(d);
      if (d.data["dismissed"] != true) {
        this.tasks.push(d.data);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      }
      console.log(this.tasks);
    });

    return await modal.present();
  }
}

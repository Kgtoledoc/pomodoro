import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { ExploreContainerComponent } from "../explore-container/explore-container.component";
import { NewTasksPage } from "../pages/new-tasks/new-tasks.page";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  public tasks: Array<any> = [];

  constructor(public modalController: ModalController) {}

  onInit() {
    this.tasks = JSON.parse(localStorage.getItem("tasks"));
  }

  async addTasks() {
    const modal = await this.modalController.create({
      component: NewTasksPage,
    });
    modal.onDidDismiss().then((d) => {
      console.log(d.data["dismissed"]);
      if (d.data["dismissed"] != true) {
        console.log("no dismiss");
        this.tasks.push(d.data);
        localStorage.setItem("tasks", JSON.stringify(this.tasks));
      } else {
        console.log("Dismiss");
      }

      console.log("False");

      console.log(this.tasks);
      console.log("This");
    });

    return await modal.present();
  }
}

import { Component, OnInit } from "@angular/core";
import { ModalController, ToastController } from "@ionic/angular";

import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-new-tasks",
  templateUrl: "./new-tasks.page.html",
  styleUrls: ["./new-tasks.page.scss"],
})
export class NewTasksPage implements OnInit {
  id: string;
  title: string = "";
  date: string = "";

  constructor(
    public modalController: ModalController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {}
  

  async presentToast(text) {
    const toast = await this.toastCtrl.create({
      message: text,
      duration: 3000,
      position: "bottom",
    });

    toast.present();
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  createTasks() {
    if (
      this.title.length > 0 &&
      this.date.length > 0
    ) {
      let seconds = this.date.split(":")[2].split(".");
      seconds.splice(0, 1, "00");
      let secondsModified = seconds.join(".");
      let dateArray = this.date.split(":");
      dateArray.splice(2, 1, secondsModified);
      let dateModified = dateArray.join(":");

      let task = {
        title: this.title,
        date: new Date(dateModified),
        isChecked: false,
        id: uuidv4(),
        subtaskArray: [],
      };
      this.modalController.dismiss(task);
    } else if (this.title.length > 0) {
      let task = {
        title: this.title,
        date: undefined,
        isChecked: false,
        id: uuidv4(),
        subtaskArray: [],
      };
      this.modalController.dismiss(task);
    } else {
      this.presentToast("Llenar todos los campos");
    }
  }

}

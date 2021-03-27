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
  description: string = "";
  date: string = "";
  isChecked: Boolean;

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
      this.description.length > 0 &&
      this.date.length > 0
    ) {
      let task = {
        title: this.title,
        description: this.description,
        date: this.date,
        isChecked: false,
        id: uuidv4(),
      };
      this.modalController.dismiss(task);
    } else {
      this.presentToast("Fill all fields");
    }
  }

  do(d) {
    console.log("date", d);
  }
}

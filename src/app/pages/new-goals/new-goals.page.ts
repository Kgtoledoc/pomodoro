import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-new-goals",
  templateUrl: "./new-goals.page.html",
  styleUrls: ["./new-goals.page.scss"],
})
export class NewGoalsPage implements OnInit {

  activityStored: Array<any>;
  activitySelected: String;
  taskTitle: String;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.activityStored = JSON.parse(localStorage.getItem("scheduledTasks"))
    ? JSON.parse(localStorage.getItem("scheduledTasks"))
    : [];
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  createNewTask() {
    let arrayStored = this.activityStored;
    let task = {
      title: this.taskTitle,
      id: uuidv4(),
      isChecked: false,
    };
    arrayStored.forEach(e => {
      if(e.id == this.activitySelected){
        e.subtaskArray.push(task)
        return
      }
    })
    console.log(arrayStored);
    localStorage.setItem(
      "scheduledTasks",
      JSON.stringify(arrayStored)
    );
    this.modalController.dismiss(arrayStored);
  }
}

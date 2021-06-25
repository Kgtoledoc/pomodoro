import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-new-goals",
  templateUrl: "./new-goals.page.html",
  styleUrls: ["./new-goals.page.scss"],
})
export class NewGoalsPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  createNewGoal() {
    console.log("create new goals");
  }
}

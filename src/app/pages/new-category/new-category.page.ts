import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-new-category",
  templateUrl: "./new-category.page.html",
  styleUrls: ["./new-category.page.scss"],
})
export class NewCategoryPage implements OnInit {
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }
}

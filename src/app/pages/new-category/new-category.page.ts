import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-new-category",
  templateUrl: "./new-category.page.html",
  styleUrls: ["./new-category.page.scss"],
})
export class NewCategoryPage implements OnInit {
  title: String = "";
  constructor(private modalController: ModalController) {}

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  createCategory() {
    /* let category = {
      title: this.title,
      id: uuidv4(),
      color: #ffffff,
      icon: icon
    } */
    let category = {
      title: this.title,
      id: uuidv4(),
    };
    this.modalController.dismiss(category);
  }
}

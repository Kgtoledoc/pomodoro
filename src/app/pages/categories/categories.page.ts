import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { ModalController } from "@ionic/angular";
import { NewCategoryPage } from "../new-category/new-category.page";

@Component({
  selector: "app-categories",
  templateUrl: "./categories.page.html",
  styleUrls: ["./categories.page.scss"],
})
export class CategoriesPage implements OnInit {
  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {}

  async createCategories() {
    const modal = await this.modalController.create({
      component: NewCategoryPage,
    });

    modal.onDidDismiss().then((goal) => {
      console.log(goal);
      if (goal.data["dismissed"] != true) {
        console.log(goal.data);
      }
    });

    return await modal.present();
  }

  close() {
    this.router.navigate([""]);
  }
}

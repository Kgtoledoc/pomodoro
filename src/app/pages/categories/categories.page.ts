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
  categories: Array<any>;
  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}

  ngOnInit() {
    this.categories = JSON.parse(localStorage.getItem("categories"))
      ? JSON.parse(localStorage.getItem("categories"))
      : [];
  }

  async createCategories() {
    const modal = await this.modalController.create({
      component: NewCategoryPage,
    });

    modal.onDidDismiss().then((category) => {
      console.log(category);
      if (category.data["dismissed"] != true) {
        console.log(category.data);
        this.categories.push(category.data);
        localStorage.setItem("categories", JSON.stringify(this.categories));
      }
    });

    return await modal.present();
  }

  close() {
    this.router.navigate([""]);
  }
}

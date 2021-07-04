import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { v4 as uuidv4 } from "uuid";

@Component({
  selector: "app-new-expense",
  templateUrl: "./new-expense.page.html",
  styleUrls: ["./new-expense.page.scss"],
})
export class NewExpensePage implements OnInit {
  name: String;
  id: String;
  date: String;
  price: Number;
  category: String;

  categories: Array<String>;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    this.categories = ["Food", "Transport", "Services", "Study"];
  }

  dismiss() {
    this.modalController.dismiss({
      dismissed: true,
    });
  }

  createExpense() {
    let expenseObject = {
      name: this.name,
      id: uuidv4(),
      date: new Date(),
      category: this.category,
      price: this.price,
    };
    this.modalController.dismiss(expenseObject);
  }
}

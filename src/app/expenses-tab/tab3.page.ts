import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { NewExpensePage } from "../pages/new-expense/new-expense.page";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  totalExpenses: Array<any>;
  expensesArray: Array<any>;

  categoryArray: Array<any>;

  expenseObject = {
    date: new Date(),
    price: "1000",
    name: "Almuerzo",
    category: "Alimentacion",
  };

  constructor(private modalController: ModalController) {
    this.expensesArray = [];
    this.expensesArray.push(this.expenseObject);
  }

  ngOnInit() {
    this.expensesArray;
  }

  async addExpenses() {
    const modal = await this.modalController.create({
      component: NewExpensePage,
    });
    modal.onDidDismiss().then((d) => {
      console.log(d);
      this.expensesArray.push(d.data);
    });

    return await modal.present();
  }
}

import { Component } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { NewExpenseComponent } from "../pages/new-expense/new-expense.component";

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
    object: "Almuerzo",
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
      component: NewExpenseComponent,
    });
    modal.onDidDismiss().then((d) => {
      console.log(d);
    });

    return await modal.present();
  }
}

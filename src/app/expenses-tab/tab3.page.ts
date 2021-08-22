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

  filterTerm: string;

  date: any;

  categoryArray: Array<any>;

  expenseObject = {
    date: new Date(),
    price: "1000",
    name: "Almuerzo",
    category: "Alimentacion",
  };

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    this.date = monthNames[new Date().getMonth()];

    let arrayExpense = JSON.parse(localStorage.getItem("expensesArray"))
      ? JSON.parse(localStorage.getItem("expensesArray"))
      : [];

    this.expensesArray = arrayExpense.filter((e) => {
      let month = monthNames[new Date(e.date).getMonth()];
      return this.date == month;
    });
  }

  async addExpenses() {
    const modal = await this.modalController.create({
      component: NewExpensePage,
    });
    modal.onDidDismiss().then((d) => {
      if (d.data["dismissed"] != true) {
        console.log(d);
        this.expensesArray.push(d.data);
        localStorage.setItem(
          "expensesArray",
          JSON.stringify(this.expensesArray)
        );
      }
    });

    return await modal.present();
  }

  filterExpenseByMonth() {}
}

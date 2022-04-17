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
  month: any;
  categoryArray: Array<any>;
  totalExpensesMonthly: Number = null;
  monthlySalary: Number = null;

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
    this.monthlySalary = 100000000;

    this.month = monthNames[new Date().getMonth()];

    let totalExpensesArrayStored = JSON.parse(localStorage.getItem("expensesArray"))
      ? JSON.parse(localStorage.getItem("expensesArray"))
      : [];

    this.expensesArray = totalExpensesArrayStored.filter((e) => {
      let month = monthNames[new Date(e.date).getMonth()];
      return this.month == month;
    });

    this.extractTotal(this.expensesArray);


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
        this.extractTotal(this.expensesArray)
      }
    });
    return await modal.present();
  }

  extractTotal(array){
    let total = 0;
    array.forEach((e) => {
      total = total + e.price
      return total
    })
    console.log(total)
    this.totalExpensesMonthly = total
  } 
}

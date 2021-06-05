import { Component } from "@angular/core";

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

  constructor() {
    this.expensesArray = [];
    this.expensesArray.push(this.expenseObject);
  }

  ngOnInit() {
    this.expensesArray;
  }

  addTasks() {}
}

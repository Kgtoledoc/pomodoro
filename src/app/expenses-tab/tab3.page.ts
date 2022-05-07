import { Component } from "@angular/core";
import { AlertController, ModalController } from "@ionic/angular";
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
  totalExpensesMonthly: number;
  monthlySalary: number;
  flagMonthlySalary: Boolean = false;



  constructor(
    private modalController: ModalController,
    private alertController: AlertController
  ) { }

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
    this.monthlySalary = JSON.parse(localStorage.getItem('monthlySalary')) ? JSON.parse(localStorage.getItem('monthlySalary')) : null;
    if (this.monthlySalary == null) {
      this.presentAlertPrompt()
    }


    this.month = monthNames[new Date().getMonth()];

    let totalExpensesArrayStored = JSON.parse(
      localStorage.getItem("expensesArray")
    )
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
        this.extractTotal(this.expensesArray);
      }
    });
    return await modal.present();
  }

  extractTotal(array) {
    let total = 0;
    array.forEach((e) => {
      total = total + e.price;
      return total;
    });
    console.log(total);
    this.totalExpensesMonthly = total;
  }

  async presentAlertPrompt() {
    const alert = await this.alertController.create({
      cssClass: "my-custom-class",
      header: "Ingrese el valor del salario:",
      inputs: [
        {
          name: "salary",
          type: "number",
        },
      ],
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          cssClass: "secondary",
          handler: () => {
            console.log("Confirm Cancel");
          },
        },
        {
          text: "Ok",
          handler: (data) => {
            this.monthlySalary = data.salary
            this.saveMonthlySalary()
          },
        },
      ],
    });

    await alert.present();
  }

  saveMonthlySalary() {
    localStorage.setItem(
      "monthlySalary",
      JSON.stringify(this.monthlySalary)
    );
  }


}

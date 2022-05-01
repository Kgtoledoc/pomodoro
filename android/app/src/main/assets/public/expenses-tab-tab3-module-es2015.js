(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expenses-tab-tab3-module"],{

/***/ "Nyhf":
/*!*********************************************!*\
  !*** ./src/app/expenses-tab/tab3.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "VIqb");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tab3-routing.module */ "xZmU");








let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: "", component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_7__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]],
    })
], Tab3PageModule);



/***/ }),

/***/ "VIqb":
/*!*******************************************!*\
  !*** ./src/app/expenses-tab/tab3.page.ts ***!
  \*******************************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab3.page.html */ "yVXn");
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss */ "cgUu");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _pages_new_expense_new_expense_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/new-expense/new-expense.page */ "z0XX");






let Tab3Page = class Tab3Page {
    constructor(modalController, alertController) {
        this.modalController = modalController;
        this.alertController = alertController;
        this.totalExpensesMonthly = null;
        this.monthlySalary = null;
        this.flagMonthlySalary = false;
    }
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
            this.presentAlertPrompt();
        }
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
    addExpenses() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_new_expense_new_expense_page__WEBPACK_IMPORTED_MODULE_5__["NewExpensePage"],
            });
            modal.onDidDismiss().then((d) => {
                if (d.data["dismissed"] != true) {
                    console.log(d);
                    this.expensesArray.push(d.data);
                    localStorage.setItem("expensesArray", JSON.stringify(this.expensesArray));
                    this.extractTotal(this.expensesArray);
                }
            });
            return yield modal.present();
        });
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
    presentAlertPrompt() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
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
                            this.monthlySalary = data.salary;
                            this.saveMonthlySalary();
                        },
                    },
                ],
            });
            yield alert.present();
        });
    }
    saveMonthlySalary() {
        localStorage.setItem("monthlySalary", JSON.stringify(this.monthlySalary));
    }
};
Tab3Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-tab3",
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab3Page);



/***/ }),

/***/ "cgUu":
/*!*********************************************!*\
  !*** ./src/app/expenses-tab/tab3.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-label {\n  text-align: center;\n}\n\nion-list-header {\n  margin-top: 0;\n}\n\n.content-header {\n  font-size: 0.8em;\n  text-align: center;\n  font-weight: 600;\n}\n\n.content-task {\n  font-size: 0.7em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRiIsImZpbGUiOiJ0YWIzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1sYWJlbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLXRvcDogMDtcbn1cblxuLmNvbnRlbnQtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAwLjhlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uY29udGVudC10YXNrIHtcbiAgZm9udC1zaXplOiAwLjdlbTtcbn1cblxuXG4iXX0= */");

/***/ }),

/***/ "xZmU":
/*!*****************************************************!*\
  !*** ./src/app/expenses-tab/tab3-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "VIqb");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "yVXn":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expenses-tab/tab3.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Lista de Gastos</ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"presentAlertPrompt()\">\n        <ion-icon name=\"filter-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-header>\n  <ion-grid>\n    <ion-row class=\"ion-align-items-center content-header\">\n      <ion-col size=\"4\">\n        <p>Salario {{ monthlySalary | currency:'COP ':'symbol' }}</p>\n      </ion-col>\n      <ion-col size=\"4\">\n        <p>{{ month }}</p>\n      </ion-col>\n      <ion-col size=\"4\">\n        <p>\n          Total Gastos {{ totalExpensesMonthly | currency:'COP ': 'symbol' }}\n        </p>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-header>\n<ion-content [fullscreen]=\"false\">\n  <ion-grid>\n    <ion-list lines=\"full\" *ngFor=\"let expense of expensesArray\">\n      <ion-item-sliding>\n        <ion-item>\n          <ion-grid class=\"content-task\">\n            <ion-row>\n              <ion-col class=\"start-side-class\" size=\"4\">\n                <p>{{ expense.name }}</p>\n              </ion-col>\n              <ion-col class=\"center-side-class\" size=\"4\">\n                <p>{{ expense.price | currency:'COP ':'symbol' }}</p>\n              </ion-col>\n              <ion-col size=\"4\" class=\"end-side-class\">\n                <p>{{ expense.date | date:'shortDate' }}</p>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n        </ion-item>\n      </ion-item-sliding>\n    </ion-list>\n  </ion-grid>\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button size=\"small\" color=\"secondary\" (click)=\"addExpenses()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=expenses-tab-tab3-module-es2015.js.map
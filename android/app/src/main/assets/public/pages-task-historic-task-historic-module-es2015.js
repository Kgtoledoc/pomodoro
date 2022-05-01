(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-task-historic-task-historic-module"],{

/***/ "/ZsV":
/*!*********************************************************************!*\
  !*** ./src/app/pages/task-historic/task-historic-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: TaskHistoricPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskHistoricPageRoutingModule", function() { return TaskHistoricPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _task_historic_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-historic.page */ "Q9oY");




const routes = [
    {
        path: '',
        component: _task_historic_page__WEBPACK_IMPORTED_MODULE_3__["TaskHistoricPage"]
    }
];
let TaskHistoricPageRoutingModule = class TaskHistoricPageRoutingModule {
};
TaskHistoricPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TaskHistoricPageRoutingModule);



/***/ }),

/***/ "10as":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-historic/task-historic.page.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title> Task Historic </ion-title>\n    <!-- <ion-button slot=\"end\" fill=\"none\" (click)=\"transformDate()\">\n      <ion-icon name=\"reload-outline\" color=\"\"></ion-icon>\n    </ion-button> -->\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-buttons slot=\"end\">\n      <ion-button slot=\"end\" (click)=\"close()\">\n        <ion-icon name=\"close-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content> </ion-content>\n");

/***/ }),

/***/ "Q9oY":
/*!***********************************************************!*\
  !*** ./src/app/pages/task-historic/task-historic.page.ts ***!
  \***********************************************************/
/*! exports provided: TaskHistoricPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskHistoricPage", function() { return TaskHistoricPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_task_historic_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./task-historic.page.html */ "10as");
/* harmony import */ var _task_historic_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-historic.page.scss */ "TNuN");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");





let TaskHistoricPage = class TaskHistoricPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    close() {
        this.router.navigate([""]);
    }
};
TaskHistoricPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
TaskHistoricPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-task-historic",
        template: _raw_loader_task_historic_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_task_historic_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TaskHistoricPage);



/***/ }),

/***/ "TNuN":
/*!*************************************************************!*\
  !*** ./src/app/pages/task-historic/task-historic.page.scss ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLWhpc3RvcmljLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "nVVn":
/*!*************************************************************!*\
  !*** ./src/app/pages/task-historic/task-historic.module.ts ***!
  \*************************************************************/
/*! exports provided: TaskHistoricPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskHistoricPageModule", function() { return TaskHistoricPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _task_historic_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-historic-routing.module */ "/ZsV");
/* harmony import */ var _task_historic_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-historic.page */ "Q9oY");







let TaskHistoricPageModule = class TaskHistoricPageModule {
};
TaskHistoricPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _task_historic_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskHistoricPageRoutingModule"]
        ],
        declarations: [_task_historic_page__WEBPACK_IMPORTED_MODULE_6__["TaskHistoricPage"]]
    })
], TaskHistoricPageModule);



/***/ })

}]);
//# sourceMappingURL=pages-task-historic-task-historic-module-es2015.js.map
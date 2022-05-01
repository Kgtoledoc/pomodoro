(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expense-historic-tab-subtab2-module"],{

/***/ "6coG":
/*!****************************************************************!*\
  !*** ./src/app/expense-historic-tab/subtab2-routing.module.ts ***!
  \****************************************************************/
/*! exports provided: Subtab2PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subtab2PageRoutingModule", function() { return Subtab2PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _subtab2_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subtab2.page */ "eZO3");




const routes = [
    {
        path: '',
        component: _subtab2_page__WEBPACK_IMPORTED_MODULE_3__["Subtab2Page"]
    }
];
let Subtab2PageRoutingModule = class Subtab2PageRoutingModule {
};
Subtab2PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], Subtab2PageRoutingModule);



/***/ }),

/***/ "HZn0":
/*!********************************************************!*\
  !*** ./src/app/expense-historic-tab/subtab2.page.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdWJ0YWIyLnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ "IvJG":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/expense-historic-tab/subtab2.page.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-card>\n    <ion-item>\n      <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n      <ion-label>ion-item in a card, icon left, button right</ion-label>\n      <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n    </ion-item>\n\n    <ion-card-content>\n      This is content, without any paragraph or header tags, within an\n      ion-card-content element.\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "Jp+F":
/*!********************************************************!*\
  !*** ./src/app/expense-historic-tab/subtab2.module.ts ***!
  \********************************************************/
/*! exports provided: Subtab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subtab2PageModule", function() { return Subtab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _subtab2_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subtab2-routing.module */ "6coG");
/* harmony import */ var _subtab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subtab2.page */ "eZO3");







let Subtab2PageModule = class Subtab2PageModule {
};
Subtab2PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _subtab2_routing_module__WEBPACK_IMPORTED_MODULE_5__["Subtab2PageRoutingModule"]
        ],
        declarations: [_subtab2_page__WEBPACK_IMPORTED_MODULE_6__["Subtab2Page"]]
    })
], Subtab2PageModule);



/***/ }),

/***/ "eZO3":
/*!******************************************************!*\
  !*** ./src/app/expense-historic-tab/subtab2.page.ts ***!
  \******************************************************/
/*! exports provided: Subtab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Subtab2Page", function() { return Subtab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_subtab2_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./subtab2.page.html */ "IvJG");
/* harmony import */ var _subtab2_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./subtab2.page.scss */ "HZn0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let Subtab2Page = class Subtab2Page {
    constructor() { }
    ngOnInit() {
    }
};
Subtab2Page.ctorParameters = () => [];
Subtab2Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-subtab2',
        template: _raw_loader_subtab2_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subtab2_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Subtab2Page);



/***/ })

}]);
//# sourceMappingURL=expense-historic-tab-subtab2-module-es2015.js.map
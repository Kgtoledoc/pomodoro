(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["categories-tabs-categories-tabs-module"],{

/***/ "2/F/":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/categories-tabs/categories-tabs.page.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n  <ion-card>\n    <ion-item>\n      <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n      <ion-label>ion-item in a card, icon left, button right</ion-label>\n      <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n    </ion-item>\n\n    <ion-card-content>\n      This is content, without any paragraph or header tags, within an\n      ion-card-content element.\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n      <ion-label>ion-item in a card, icon left, button right</ion-label>\n      <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n    </ion-item>\n\n    <ion-card-content>\n      This is content, without any paragraph or header tags, within an\n      ion-card-content element.\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n      <ion-label>ion-item in a card, icon left, button right</ion-label>\n      <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n    </ion-item>\n\n    <ion-card-content>\n      This is content, without any paragraph or header tags, within an\n      ion-card-content element.\n    </ion-card-content>\n  </ion-card>\n  <ion-card>\n    <ion-item>\n      <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n      <ion-label>ion-item in a card, icon left, button right</ion-label>\n      <ion-button fill=\"outline\" slot=\"end\">View</ion-button>\n    </ion-item>\n\n    <ion-card-content>\n      This is content, without any paragraph or header tags, within an\n      ion-card-content element.\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ }),

/***/ "5DLP":
/*!*********************************************************!*\
  !*** ./src/app/categories-tabs/categories-tabs.page.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesTabsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesTabsPage", function() { return CategoriesTabsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_categories_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./categories-tabs.page.html */ "2/F/");
/* harmony import */ var _categories_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories-tabs.page.scss */ "bQB7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let CategoriesTabsPage = class CategoriesTabsPage {
    constructor() { }
    ngOnInit() {
    }
};
CategoriesTabsPage.ctorParameters = () => [];
CategoriesTabsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-categories-tabs',
        template: _raw_loader_categories_tabs_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_categories_tabs_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], CategoriesTabsPage);



/***/ }),

/***/ "LjWV":
/*!*******************************************************************!*\
  !*** ./src/app/categories-tabs/categories-tabs-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CategoriesTabsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesTabsPageRoutingModule", function() { return CategoriesTabsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _categories_tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories-tabs.page */ "5DLP");




const routes = [
    {
        path: '',
        component: _categories_tabs_page__WEBPACK_IMPORTED_MODULE_3__["CategoriesTabsPage"]
    }
];
let CategoriesTabsPageRoutingModule = class CategoriesTabsPageRoutingModule {
};
CategoriesTabsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], CategoriesTabsPageRoutingModule);



/***/ }),

/***/ "bQB7":
/*!***********************************************************!*\
  !*** ./src/app/categories-tabs/categories-tabs.page.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXRlZ29yaWVzLXRhYnMucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ "wVin":
/*!***********************************************************!*\
  !*** ./src/app/categories-tabs/categories-tabs.module.ts ***!
  \***********************************************************/
/*! exports provided: CategoriesTabsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesTabsPageModule", function() { return CategoriesTabsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _categories_tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./categories-tabs-routing.module */ "LjWV");
/* harmony import */ var _categories_tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./categories-tabs.page */ "5DLP");







let CategoriesTabsPageModule = class CategoriesTabsPageModule {
};
CategoriesTabsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _categories_tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["CategoriesTabsPageRoutingModule"]
        ],
        declarations: [_categories_tabs_page__WEBPACK_IMPORTED_MODULE_6__["CategoriesTabsPage"]]
    })
], CategoriesTabsPageModule);



/***/ })

}]);
//# sourceMappingURL=categories-tabs-categories-tabs-module-es2015.js.map
(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-expense-new-expense-module"], {
    /***/
    "f6oD":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/new-expense/new-expense-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: NewExpensePageRoutingModule */

    /***/
    function f6oD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewExpensePageRoutingModule", function () {
        return NewExpensePageRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _new_expense_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new-expense.page */
      "z0XX");

      var routes = [{
        path: '',
        component: _new_expense_page__WEBPACK_IMPORTED_MODULE_3__["NewExpensePage"]
      }];

      var NewExpensePageRoutingModule = function NewExpensePageRoutingModule() {
        _classCallCheck(this, NewExpensePageRoutingModule);
      };

      NewExpensePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewExpensePageRoutingModule);
      /***/
    },

    /***/
    "xvx1":
    /*!*********************************************************!*\
      !*** ./src/app/pages/new-expense/new-expense.module.ts ***!
      \*********************************************************/

    /*! exports provided: NewExpensePageModule */

    /***/
    function xvx1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewExpensePageModule", function () {
        return NewExpensePageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _new_expense_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-expense-routing.module */
      "f6oD");
      /* harmony import */


      var _new_expense_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new-expense.page */
      "z0XX");

      var NewExpensePageModule = function NewExpensePageModule() {
        _classCallCheck(this, NewExpensePageModule);
      };

      NewExpensePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_expense_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewExpensePageRoutingModule"]],
        declarations: [_new_expense_page__WEBPACK_IMPORTED_MODULE_6__["NewExpensePage"]]
      })], NewExpensePageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-new-expense-new-expense-module-es5.js.map
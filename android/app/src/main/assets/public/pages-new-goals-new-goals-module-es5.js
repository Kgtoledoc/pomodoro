(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-goals-new-goals-module"], {
    /***/
    "/NZ0":
    /*!*****************************************************!*\
      !*** ./src/app/pages/new-goals/new-goals.module.ts ***!
      \*****************************************************/

    /*! exports provided: NewGoalsPageModule */

    /***/
    function NZ0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewGoalsPageModule", function () {
        return NewGoalsPageModule;
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


      var _new_goals_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-goals-routing.module */
      "2mlQ");
      /* harmony import */


      var _new_goals_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new-goals.page */
      "cWVS");

      var NewGoalsPageModule = function NewGoalsPageModule() {
        _classCallCheck(this, NewGoalsPageModule);
      };

      NewGoalsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_goals_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewGoalsPageRoutingModule"]],
        declarations: [_new_goals_page__WEBPACK_IMPORTED_MODULE_6__["NewGoalsPage"]]
      })], NewGoalsPageModule);
      /***/
    },

    /***/
    "2mlQ":
    /*!*************************************************************!*\
      !*** ./src/app/pages/new-goals/new-goals-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: NewGoalsPageRoutingModule */

    /***/
    function mlQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewGoalsPageRoutingModule", function () {
        return NewGoalsPageRoutingModule;
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


      var _new_goals_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new-goals.page */
      "cWVS");

      var routes = [{
        path: '',
        component: _new_goals_page__WEBPACK_IMPORTED_MODULE_3__["NewGoalsPage"]
      }];

      var NewGoalsPageRoutingModule = function NewGoalsPageRoutingModule() {
        _classCallCheck(this, NewGoalsPageRoutingModule);
      };

      NewGoalsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewGoalsPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-new-goals-new-goals-module-es5.js.map
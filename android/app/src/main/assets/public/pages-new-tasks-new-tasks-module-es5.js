(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-tasks-new-tasks-module"], {
    /***/
    "53EU":
    /*!*****************************************************!*\
      !*** ./src/app/pages/new-tasks/new-tasks.module.ts ***!
      \*****************************************************/

    /*! exports provided: NewTasksPageModule */

    /***/
    function EU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewTasksPageModule", function () {
        return NewTasksPageModule;
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


      var _new_tasks_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-tasks-routing.module */
      "bm8l");
      /* harmony import */


      var _new_tasks_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new-tasks.page */
      "FJtP");

      var NewTasksPageModule = function NewTasksPageModule() {
        _classCallCheck(this, NewTasksPageModule);
      };

      NewTasksPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_tasks_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewTasksPageRoutingModule"]],
        declarations: [_new_tasks_page__WEBPACK_IMPORTED_MODULE_6__["NewTasksPage"]]
      })], NewTasksPageModule);
      /***/
    },

    /***/
    "bm8l":
    /*!*************************************************************!*\
      !*** ./src/app/pages/new-tasks/new-tasks-routing.module.ts ***!
      \*************************************************************/

    /*! exports provided: NewTasksPageRoutingModule */

    /***/
    function bm8l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewTasksPageRoutingModule", function () {
        return NewTasksPageRoutingModule;
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


      var _new_tasks_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new-tasks.page */
      "FJtP");

      var routes = [{
        path: '',
        component: _new_tasks_page__WEBPACK_IMPORTED_MODULE_3__["NewTasksPage"]
      }];

      var NewTasksPageRoutingModule = function NewTasksPageRoutingModule() {
        _classCallCheck(this, NewTasksPageRoutingModule);
      };

      NewTasksPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewTasksPageRoutingModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-new-tasks-new-tasks-module-es5.js.map
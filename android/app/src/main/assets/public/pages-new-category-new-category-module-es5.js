(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-new-category-new-category-module"], {
    /***/
    "IA0H":
    /*!*******************************************************************!*\
      !*** ./src/app/pages/new-category/new-category-routing.module.ts ***!
      \*******************************************************************/

    /*! exports provided: NewCategoryPageRoutingModule */

    /***/
    function IA0H(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewCategoryPageRoutingModule", function () {
        return NewCategoryPageRoutingModule;
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


      var _new_category_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./new-category.page */
      "q2Eo");

      var routes = [{
        path: '',
        component: _new_category_page__WEBPACK_IMPORTED_MODULE_3__["NewCategoryPage"]
      }];

      var NewCategoryPageRoutingModule = function NewCategoryPageRoutingModule() {
        _classCallCheck(this, NewCategoryPageRoutingModule);
      };

      NewCategoryPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], NewCategoryPageRoutingModule);
      /***/
    },

    /***/
    "siHA":
    /*!***********************************************************!*\
      !*** ./src/app/pages/new-category/new-category.module.ts ***!
      \***********************************************************/

    /*! exports provided: NewCategoryPageModule */

    /***/
    function siHA(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NewCategoryPageModule", function () {
        return NewCategoryPageModule;
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


      var _new_category_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./new-category-routing.module */
      "IA0H");
      /* harmony import */


      var _new_category_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./new-category.page */
      "q2Eo");

      var NewCategoryPageModule = function NewCategoryPageModule() {
        _classCallCheck(this, NewCategoryPageModule);
      };

      NewCategoryPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _new_category_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewCategoryPageRoutingModule"]],
        declarations: [_new_category_page__WEBPACK_IMPORTED_MODULE_6__["NewCategoryPage"]]
      })], NewCategoryPageModule);
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-new-category-new-category-module-es5.js.map
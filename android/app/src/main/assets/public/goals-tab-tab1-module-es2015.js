(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["goals-tab-tab1-module"],{

/***/ "/Zh7":
/*!******************************************!*\
  !*** ./src/app/goals-tab/tab1.page.scss ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#progress-circle {\n  margin-top: 50px;\n  transform: rotate(-90deg);\n}\n\n.timer-text {\n  transform: rotate(90deg);\n  transform-origin: center;\n  font-size: 36px;\n  text-anchor: middle;\n  font-weight: 600;\n  fill: #333;\n}\n\n.footer ion-button {\n  font-size: 20px;\n  font-weight: 600;\n  height: 25px;\n}\n\n.footer ion-button button {\n  height: 50px;\n}\n\n.timer-icons {\n  margin-top: -20vh;\n  height: 5vh;\n  width: 100vw;\n  fill: var(--ion-color-secondary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjEucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0Usd0JBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUFFO0VBQ0UsWUFBQTtBQUVKOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0FBQ0YiLCJmaWxlIjoidGFiMS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcHJvZ3Jlc3MtY2lyY2xlIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcbn1cblxuLnRpbWVyLXRleHQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNnB4O1xuICB0ZXh0LWFuY2hvcjogbWlkZGxlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmaWxsOiAjMzMzO1xufVxuXG4uZm9vdGVyIGlvbi1idXR0b24ge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGhlaWdodDogMjVweDtcbiAgYnV0dG9uIHtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gIH1cbn1cblxuLnRpbWVyLWljb25zIHtcbiAgbWFyZ2luLXRvcDogLTIwdmg7XG4gIGhlaWdodDogNXZoO1xuICB3aWR0aDogMTAwdnc7XG4gIGZpbGw6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnkpO1xufVxuIl19 */");

/***/ }),

/***/ "8NoV":
/*!****************************************!*\
  !*** ./src/app/goals-tab/tab1.page.ts ***!
  \****************************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab1.page.html */ "WK2t");
/* harmony import */ var _tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab1.page.scss */ "/Zh7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/native-audio/ngx */ "fLLL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/text-to-speech/ngx */ "EvNN");
/* harmony import */ var _pages_new_goals_new_goals_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pages/new-goals/new-goals.page */ "cWVS");








let Tab1Page = class Tab1Page {
    constructor(alertController, nativeAudio, platform, tts, modalController) {
        this.alertController = alertController;
        this.nativeAudio = nativeAudio;
        this.platform = platform;
        this.tts = tts;
        this.modalController = modalController;
    }
    ngOnInit() {
        this.taskStored = JSON.parse(localStorage.getItem("scheduledTasks"))
            ? JSON.parse(localStorage.getItem("scheduledTasks"))
            : [];
        console.log(this.taskStored);
        this.taskObjectArray = this.extractTaskFromScheduledTask(this.taskStored);
    }
    ionViewWillEnter() {
        this.taskStored = JSON.parse(localStorage.getItem("scheduledTasks"))
            ? JSON.parse(localStorage.getItem("scheduledTasks"))
            : [];
        console.log(this.taskStored);
        console.log(this.extractTaskFromScheduledTask(this.taskStored));
        this.taskObjectArray = this.extractTaskFromScheduledTask(this.taskStored);
    }
    // Function for open a modal and save the goal created
    createSubtask() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalController.create({
                component: _pages_new_goals_new_goals_page__WEBPACK_IMPORTED_MODULE_7__["NewGoalsPage"],
            });
            modal.onDidDismiss().then((goal) => {
                console.log(goal);
                if (goal.data["dismissed"] != true) {
                    this.taskStored = JSON.parse(localStorage.getItem("scheduledTasks"))
                        ? JSON.parse(localStorage.getItem("scheduledTasks"))
                        : [];
                }
            });
            return yield modal.present();
        });
    }
    extractTaskFromScheduledTask(array) {
        let arr = [];
        array.forEach((e) => {
            e.subtaskArray.forEach((element) => {
                arr.push(Object.assign(Object.assign({}, element), { taskTitle: e.title }));
            });
        });
        return arr;
    }
};
Tab1Page.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"] },
    { type: _ionic_native_native_audio_ngx__WEBPACK_IMPORTED_MODULE_4__["NativeAudio"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"] },
    { type: _ionic_native_text_to_speech_ngx__WEBPACK_IMPORTED_MODULE_6__["TextToSpeech"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["ModalController"] }
];
Tab1Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-tab1",
        template: _raw_loader_tab1_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab1_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab1Page);



/***/ }),

/***/ "WK2t":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/goals-tab/tab1.page.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title> Lista de Tareas </ion-title>\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content [fullscreen]=\"false\">\n  <ion-grid>\n    <ion-list>\n\n      <ion-item *ngFor=\"let task of taskObjectArray\">\n        <ion-grid class=\"content-task\">\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"2\">\n              <ion-checkbox [(ngModel)]=\"task.isChecked\" checked=\"{{task.isChecked}}\" (ionChange)=\"check(task)\">\n              </ion-checkbox>\n            </ion-col>\n            <ion-col size=\"6\">\n              <p>{{task.title}}</p>\n            </ion-col>\n            <ion-col size=\"4\">\n              <p>{{task.taskTitle}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n\n  </ion-grid>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button size=\"small\" (click)=\"createSubtask()\">\n      <ion-icon name=\"add\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n</ion-content>");

/***/ }),

/***/ "yOxL":
/*!**************************************************!*\
  !*** ./src/app/goals-tab/tab1-routing.module.ts ***!
  \**************************************************/
/*! exports provided: Tab1PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageRoutingModule", function() { return Tab1PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab1.page */ "8NoV");




const routes = [
    {
        path: '',
        component: _tab1_page__WEBPACK_IMPORTED_MODULE_3__["Tab1Page"],
    }
];
let Tab1PageRoutingModule = class Tab1PageRoutingModule {
};
Tab1PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab1PageRoutingModule);



/***/ }),

/***/ "z5PN":
/*!******************************************!*\
  !*** ./src/app/goals-tab/tab1.module.ts ***!
  \******************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tab1.page */ "8NoV");
/* harmony import */ var _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1-routing.module */ "yOxL");







let Tab1PageModule = class Tab1PageModule {
};
Tab1PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tab1_routing_module__WEBPACK_IMPORTED_MODULE_6__["Tab1PageRoutingModule"]],
        declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_5__["Tab1Page"]],
    })
], Tab1PageModule);



/***/ })

}]);
//# sourceMappingURL=goals-tab-tab1-module-es2015.js.map
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-task-detail-task-detail-module"],{

/***/ "Dse8":
/*!*********************************************************!*\
  !*** ./src/app/pages/task-detail/task-detail.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXNrLWRldGFpbC5wYWdlLnNjc3MifQ== */");

/***/ }),

/***/ "FS0i":
/*!*****************************************************************!*\
  !*** ./src/app/pages/task-detail/task-detail-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: TaskDetailPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailPageRoutingModule", function() { return TaskDetailPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _task_detail_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-detail.page */ "aE9h");




const routes = [
    {
        path: '',
        component: _task_detail_page__WEBPACK_IMPORTED_MODULE_3__["TaskDetailPage"]
    }
];
let TaskDetailPageRoutingModule = class TaskDetailPageRoutingModule {
};
TaskDetailPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], TaskDetailPageRoutingModule);



/***/ }),

/***/ "S4AJ":
/*!*********************************************************!*\
  !*** ./src/app/pages/task-detail/task-detail.module.ts ***!
  \*********************************************************/
/*! exports provided: TaskDetailPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailPageModule", function() { return TaskDetailPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _task_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-detail-routing.module */ "FS0i");
/* harmony import */ var _task_detail_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-detail.page */ "aE9h");







let TaskDetailPageModule = class TaskDetailPageModule {
};
TaskDetailPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _task_detail_routing_module__WEBPACK_IMPORTED_MODULE_5__["TaskDetailPageRoutingModule"]
        ],
        declarations: [_task_detail_page__WEBPACK_IMPORTED_MODULE_6__["TaskDetailPage"]]
    })
], TaskDetailPageModule);



/***/ }),

/***/ "aE9h":
/*!*******************************************************!*\
  !*** ./src/app/pages/task-detail/task-detail.page.ts ***!
  \*******************************************************/
/*! exports provided: TaskDetailPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailPage", function() { return TaskDetailPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_task_detail_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./task-detail.page.html */ "cW0J");
/* harmony import */ var _task_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-detail.page.scss */ "Dse8");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! uuid */ "4USb");






let TaskDetailPage = class TaskDetailPage {
    constructor(router, route) {
        this.router = router;
        this.route = route;
    }
    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            console.log(params);
            if (params && params.special) {
                this.task = JSON.parse(params.special);
            }
            console.log(this.task);
        });
        this.subtaskInput = false;
        this.subtaskTitle = "";
    }
    closeTaskDetail() {
        this.router.navigate([""]);
    }
    //add subtask
    //refresh the task array with the new task object - other subtask
    addSubtask() {
        console.log("Add Subtask");
        this.subtaskInput = true;
    }
    enterSubtask() {
        console.log("subtask " + this.subtaskTitle);
        let subtask = {
            title: this.subtaskTitle,
            id: Object(uuid__WEBPACK_IMPORTED_MODULE_5__["v4"])(),
            isChecked: false,
        };
        this.task.subtaskArray.push(subtask);
        this.subtaskTitle = "";
        this.subtaskInput = false;
        this.saveSubtaskArray(this.task);
    }
    check(task) {
        console.log(task);
        this.saveSubtaskArray(this.task);
    }
    // Function to save the new content of task into scheduledTask
    // Delete task function
    delete(subtask) {
        this.task.subtaskArray = this.task.subtaskArray.filter((e) => {
            return subtask.id != e.id;
        });
        this.saveSubtaskArray(this.task);
    }
    saveSubtaskArray(taskChanged) {
        // Load the content of TaskArray
        let scheduledTask = JSON.parse(localStorage.getItem("scheduledTasks"));
        // Find the index of object into array
        let index = scheduledTask.findIndex((task, i) => {
            return task.id === taskChanged.id;
        });
        // Replace the object into index with the new object or only push the task
        scheduledTask.splice(index, 1, taskChanged);
        console.log("Scheduled Task ", scheduledTask);
        // Save the scheduledTask into LocalStorage
        localStorage.setItem("scheduledTasks", JSON.stringify(scheduledTask));
    }
};
TaskDetailPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
TaskDetailPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: "app-task-detail",
        template: _raw_loader_task_detail_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_task_detail_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TaskDetailPage);



/***/ }),

/***/ "cW0J":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/task-detail/task-detail.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/tasks\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Task Detail</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n  <ion-list>\n    <ion-item lines=\"none\">\n      <ion-label>Title</ion-label>\n      <h3>{{this.task.title}}</h3>\n    </ion-item>\n    <ion-item lines=\"none\">\n      <ion-label>Date</ion-label>\n      <h3>{{task.date | date:'shortTime'}}</h3>\n    </ion-item>\n  </ion-list>\n\n  <ion-list>\n    <ion-list-header lines=\"none\">\n      <ion-label>Subtask</ion-label>\n      <ion-button shape=\"round\" expand=\"block\" (click)=\"addSubtask()\">\n        <ion-icon slot=\"end\" name=\"add\"></ion-icon>\n      </ion-button>\n    </ion-list-header>\n    <ion-item-sliding *ngFor=\"let subtask of this.task.subtaskArray\">\n      <ion-item lines=\"none\">\n        <ion-checkbox\n          slot=\"start\"\n          [(ngModel)]=\"subtask.isChecked\"\n          checked=\"{{subtask.isChecked}}\"\n          (ionChange)=\"check(task)\"\n        ></ion-checkbox>\n\n        <p>{{subtask.title}}</p>\n      </ion-item>\n      <ion-item-options side=\"end\">\n        <ion-item-option (click)=\"delete(subtask)\">\n          <ion-icon slot=\"icon-only\" name=\"trash-outline\"></ion-icon>\n        </ion-item-option>\n      </ion-item-options>\n    </ion-item-sliding>\n  </ion-list>\n</ion-content>\n<ion-footer>\n  <ng-container *ngIf=\"subtaskInput\">\n    <ion-list>\n      <ion-item>\n        <ion-input\n          type=\"text\"\n          [(ngModel)]=\"subtaskTitle\"\n          placeholder=\"New subtask\"\n        ></ion-input>\n        <ion-button (click)=\"enterSubtask()\">+</ion-button>\n      </ion-item>\n    </ion-list>\n  </ng-container>\n</ion-footer>\n");

/***/ })

}]);
//# sourceMappingURL=pages-task-detail-task-detail-module-es2015.js.map
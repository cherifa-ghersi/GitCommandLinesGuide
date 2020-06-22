(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container row\">\n  <app-problem class=\"container-problem col-md-6\" (selectedProblem)=\"selectedProblem=$event\"></app-problem>\n  <app-solution class=\"container-solution col-md-6\" [selectedProblem]=\"selectedProblem\"></app-solution>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/problem/problem.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/problem/problem.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"problems-form\">\n  <div >\n        <h1>Git Problem Explorer </h1>\n        <p>Find the right commands you need without digging through the web.</p>\n  </div>\n  <form class=\"block\">\n    <mat-form-field class=\"problems-full-width \">\n      <input matInput placeholder=\"Oh shit\" aria-label=\"Problem\" [matAutocomplete]=\"auto\" [formControl]=\"problemCtrl\">\n      <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"optionSelected($event.option.value.id)\" [displayWith]=\"displayFn\">\n        <mat-option *ngFor=\"let problem of filteredproblems | async\" [value]=\"problem\" >\n          <span>{{problem?.value}}</span>\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field>\n  </form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/solution/solution.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/solution/solution.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"board\">\n    <pre > <span class=\"typed-cursor\"></span>{{ this.getSolution() }}</pre>\n</div>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container{\n  -webkit-box-flex: 1;\n          flex: 1 1;\n  padding-top: 10rem;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  display: -webkit-box;\n  display: flex;\n}\n\n.container-problem {\n  width: 100%;\n}\n\n.container-solution{\n  width: 100%;\n  padding-top: 5rem;\n  position: relative;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBUztVQUFULFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsOEJBQW1CO0VBQW5CLDZCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsb0JBQWE7RUFBYixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBQ0E7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgZmxleDogMSAxO1xuICBwYWRkaW5nLXRvcDogMTByZW07XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jb250YWluZXItcHJvYmxlbSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnRhaW5lci1zb2x1dGlvbntcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiA1cmVtO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.selectedProblem = function () {
        return;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _problem_problem_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./problem/problem.component */ "./src/app/problem/problem.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/esm5/slide-toggle.es5.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/esm5/autocomplete.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _solution_solution_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./solution/solution.component */ "./src/app/solution/solution.component.ts");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var ng_typed__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-typed */ "./node_modules/ng-typed/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _problem_problem_component__WEBPACK_IMPORTED_MODULE_4__["ProblemComponent"],
                _solution_solution_component__WEBPACK_IMPORTED_MODULE_10__["SolutionComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_11__["MatSelectModule"],
                ng_typed__WEBPACK_IMPORTED_MODULE_12__["NgTypedModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data/options.ts":
/*!*********************************!*\
  !*** ./src/app/data/options.ts ***!
  \*********************************/
/*! exports provided: problems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "problems", function() { return problems; });
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var problems = [
    {
        id: 0,
        value: 'I did something terribly wrong, please tell me git has a magic time machine!?!',
        solution: 'git reflog \n git reset HEAD@{index}, \nI committed and immediately realized I need to make one small change! \n' +
            'I committed and immediately realized I need to make one small change! \n' +
            'I committed and immediately realized I need to make one small change!'
    },
    {
        id: 1,
        value: 'I need to undo my changes to a file!',
        solution: 'git reflog'
    },
    {
        id: 2,
        value: 'I committed and immediately realized I need to make one small change!',
        solution: 'git reflogggggggggggggggggg'
    },
    {
        id: 3,
        value: 'I need to change the message on my last commit!',
        solution: 'git reflog'
    },
    {
        id: 4,
        value: ' accidentally committed something to master that should have been on a brand new branch!',
        solution: 'git reflog'
    },
    {
        id: 5,
        value: 'I accidentally committed to the wrong branch!',
        solution: 'git reflog'
    },
    {
        id: 6,
        value: 'I tried to run a diff but nothing happened?!',
        solution: 'git reflog'
    },
    {
        id: 7,
        value: 'I need to undo a commit from like 5 commits ago!',
        solution: 'git reflog'
    },
    {
        id: 8,
        value: 'I need to undo my changes to a file!',
        solution: 'git reflog'
    }
];


/***/ }),

/***/ "./src/app/problem/problem.component.css":
/*!***********************************************!*\
  !*** ./src/app/problem/problem.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".problems-full-width {\n  width :70%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvYmxlbS9wcm9ibGVtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9wcm9ibGVtL3Byb2JsZW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9ibGVtcy1mdWxsLXdpZHRoIHtcbiAgd2lkdGggOjcwJTtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/problem/problem.component.ts":
/*!**********************************************!*\
  !*** ./src/app/problem/problem.component.ts ***!
  \**********************************************/
/*! exports provided: ProblemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProblemComponent", function() { return ProblemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _data_options__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/options */ "./src/app/data/options.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var ProblemComponent = /** @class */ (function () {
    function ProblemComponent() {
        var _this = this;
        this.selectedProblem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.problemCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]();
        this.problems = _data_options__WEBPACK_IMPORTED_MODULE_3__["problems"];
        this.filteredproblems = this.problemCtrl.valueChanges
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (problem) { return problem ? _this._filterProblems(problem) : _this.problems.slice(); }));
    }
    ProblemComponent.prototype.ngOnInit = function () {
    };
    ProblemComponent.prototype._filterProblems = function (value) {
        var filterValue = value;
        return this.problems.filter(function (problem) { return problem.value.toLowerCase().indexOf(filterValue) === 0; });
    };
    ProblemComponent.prototype.optionSelected = function (event) {
        console.log(event);
        this.selectedProblem.emit(event);
    };
    ProblemComponent.prototype.displayFn = function (problem) {
        return problem ? problem.value : problem;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], ProblemComponent.prototype, "selectedProblem", void 0);
    ProblemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-problem',
            template: __importDefault(__webpack_require__(/*! raw-loader!./problem.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/problem/problem.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./problem.component.css */ "./src/app/problem/problem.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProblemComponent);
    return ProblemComponent;
}());



/***/ }),

/***/ "./src/app/solution/solution.component.css":
/*!*************************************************!*\
  !*** ./src/app/solution/solution.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".board {\n  background: #20252d;\n  border-radius: 1rem;\n  border-left: 1rem solid #00bfaa;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  padding: 2rem;\n  -webkit-transition: black .3s cubic-bezier(.175,.885,.32,1.275);\n  transition: black .3s cubic-bezier(.175,.885,.32,1.275);\n  color: white;\n  -webkit-transition: all 0.3s;\n  transition: all 0.3s;\n  left: 50%;\n  position: absolute;\n  -webkit-transform: translateX(-50%);\n          transform: translateX(-50%);\n  white-space: pre-wrap;\n  width: 100%;\n}\n\n.board * {\n  letter-spacing : 1px;\n}\n\n.animate {\n  border-right: solid 3px rgba(0,255,0,.75);\n  white-space: nowrap;\n  overflow: hidden;    \n  font-family: 'Source Code Pro', monospace;  \n  font-size: 28px;\n  color: rgba(255,255,255,.70);\n}\n\n/* Animation */\n\n.animate {\n  -webkit-animation: animated-text 4s steps(9,end) 1s 1 normal both,\n             animated-cursor 600ms steps(29,end) infinite;\n          animation: animated-text 4s steps(9,end) 1s 1 normal both,\n             animated-cursor 600ms steps(29,end) infinite;\n}\n\n.clear {\n  display: none;\n}\n\n/* text animation */\n\n.typed-cursor{\n  opacity: 1;\n  animation: typedjsBlink 0.7s infinite;\n  -webkit-animation: typedjsBlink 0.7s infinite;\n  animation: typedjsBlink 0.7s infinite;\n}\n\n@keyframes typedjsBlink{\n  50% { opacity: 0.0; }\n}\n\n@-webkit-keyframes typedjsBlink{\n  0% { opacity: 1; }\n  50% { opacity: 0.0; }\n  100% { opacity: 1; }\n}\n\n@-webkit-keyframes animated-text{\n  from{width: 0; height: 0;}\n  to{width: 100%; height: 100%;}\n\n}\n\n@keyframes animated-text{\n  from{width: 0; height: 0;}\n  to{width: 100%; height: 100%;}\n\n}\n\n/* cursor animations */\n\n@-webkit-keyframes animated-cursor{\n  from{border-right-color: rgba(0,255,0,.75);}\n  to{border-right-color: transparent;}\n}\n\n@keyframes animated-cursor{\n  from{border-right-color: rgba(0,255,0,.75);}\n  to{border-right-color: transparent;}\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29sdXRpb24vc29sdXRpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsK0JBQStCO0VBQy9CLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLHlCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsYUFBYTtFQUNiLCtEQUF1RDtFQUF2RCx1REFBdUQ7RUFDdkQsWUFBWTtFQUNaLDRCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIsU0FBUztFQUNULGtCQUFrQjtFQUNsQixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHFCQUFxQjtFQUNyQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSx5Q0FBeUM7RUFDekMsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQix5Q0FBeUM7RUFDekMsZUFBZTtFQUNmLDRCQUE0QjtBQUM5Qjs7QUFFQSxjQUFjOztBQUNkO0VBQ0U7eURBQ3VEO1VBRHZEO3lEQUN1RDtBQUN6RDs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQSxtQkFBbUI7O0FBQ25CO0VBQ0UsVUFBVTtFQUNWLHFDQUFxQztFQUNyQyw2Q0FBNkM7RUFDN0MscUNBQXFDO0FBQ3ZDOztBQUNBO0VBQ0UsTUFBTSxZQUFZLEVBQUU7QUFDdEI7O0FBQ0E7RUFDRSxLQUFLLFVBQVUsRUFBRTtFQUNqQixNQUFNLFlBQVksRUFBRTtFQUNwQixPQUFPLFVBQVUsRUFBRTtBQUNyQjs7QUFDQTtFQUNFLEtBQUssUUFBUSxFQUFFLFNBQVMsQ0FBQztFQUN6QixHQUFHLFdBQVcsRUFBRSxZQUFZLENBQUM7O0FBRS9COztBQUpBO0VBQ0UsS0FBSyxRQUFRLEVBQUUsU0FBUyxDQUFDO0VBQ3pCLEdBQUcsV0FBVyxFQUFFLFlBQVksQ0FBQzs7QUFFL0I7O0FBRUEsc0JBQXNCOztBQUV0QjtFQUNFLEtBQUsscUNBQXFDLENBQUM7RUFDM0MsR0FBRywrQkFBK0IsQ0FBQztBQUNyQzs7QUFIQTtFQUNFLEtBQUsscUNBQXFDLENBQUM7RUFDM0MsR0FBRywrQkFBK0IsQ0FBQztBQUNyQyIsImZpbGUiOiJzcmMvYXBwL3NvbHV0aW9uL3NvbHV0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9hcmQge1xuICBiYWNrZ3JvdW5kOiAjMjAyNTJkO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICBib3JkZXItbGVmdDogMXJlbSBzb2xpZCAjMDBiZmFhO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHBhZGRpbmc6IDJyZW07XG4gIHRyYW5zaXRpb246IGJsYWNrIC4zcyBjdWJpYy1iZXppZXIoLjE3NSwuODg1LC4zMiwxLjI3NSk7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG4gIGxlZnQ6IDUwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdoaXRlLXNwYWNlOiBwcmUtd3JhcDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5ib2FyZCAqIHtcbiAgbGV0dGVyLXNwYWNpbmcgOiAxcHg7XG59XG5cbi5hbmltYXRlIHtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCAzcHggcmdiYSgwLDI1NSwwLC43NSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIG92ZXJmbG93OiBoaWRkZW47ICAgIFxuICBmb250LWZhbWlseTogJ1NvdXJjZSBDb2RlIFBybycsIG1vbm9zcGFjZTsgIFxuICBmb250LXNpemU6IDI4cHg7XG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LC43MCk7XG59XG5cbi8qIEFuaW1hdGlvbiAqL1xuLmFuaW1hdGUge1xuICBhbmltYXRpb246IGFuaW1hdGVkLXRleHQgNHMgc3RlcHMoOSxlbmQpIDFzIDEgbm9ybWFsIGJvdGgsXG4gICAgICAgICAgICAgYW5pbWF0ZWQtY3Vyc29yIDYwMG1zIHN0ZXBzKDI5LGVuZCkgaW5maW5pdGU7XG59XG4uY2xlYXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuLyogdGV4dCBhbmltYXRpb24gKi9cbi50eXBlZC1jdXJzb3J7XG4gIG9wYWNpdHk6IDE7XG4gIGFuaW1hdGlvbjogdHlwZWRqc0JsaW5rIDAuN3MgaW5maW5pdGU7XG4gIC13ZWJraXQtYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcbiAgYW5pbWF0aW9uOiB0eXBlZGpzQmxpbmsgMC43cyBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgdHlwZWRqc0JsaW5re1xuICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyB0eXBlZGpzQmxpbmt7XG4gIDAlIHsgb3BhY2l0eTogMTsgfVxuICA1MCUgeyBvcGFjaXR5OiAwLjA7IH1cbiAgMTAwJSB7IG9wYWNpdHk6IDE7IH1cbn1cbkBrZXlmcmFtZXMgYW5pbWF0ZWQtdGV4dHtcbiAgZnJvbXt3aWR0aDogMDsgaGVpZ2h0OiAwO31cbiAgdG97d2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTt9XG5cbn1cblxuLyogY3Vyc29yIGFuaW1hdGlvbnMgKi9cblxuQGtleWZyYW1lcyBhbmltYXRlZC1jdXJzb3J7XG4gIGZyb217Ym9yZGVyLXJpZ2h0LWNvbG9yOiByZ2JhKDAsMjU1LDAsLjc1KTt9XG4gIHRve2JvcmRlci1yaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7fVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/solution/solution.component.ts":
/*!************************************************!*\
  !*** ./src/app/solution/solution.component.ts ***!
  \************************************************/
/*! exports provided: SolutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolutionComponent", function() { return SolutionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _data_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../data/options */ "./src/app/data/options.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var SolutionComponent = /** @class */ (function () {
    function SolutionComponent() {
    }
    SolutionComponent.prototype.ngOnInit = function () {
        console.log(_data_options__WEBPACK_IMPORTED_MODULE_1__["problems"], this.selectedProblem);
    };
    SolutionComponent.prototype.ngOnChanges = function () {
        this.taped = { 'speed': 0.1,
            'timeout': 1000,
            'hideCursorOnComplete': false,
            'hideCursor': false,
            'cursor': '|'
        };
    };
    SolutionComponent.prototype.getSolution = function () {
        return _data_options__WEBPACK_IMPORTED_MODULE_1__["problems"][this.selectedProblem] ? _data_options__WEBPACK_IMPORTED_MODULE_1__["problems"][this.selectedProblem].solution : '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], SolutionComponent.prototype, "selectedProblem", void 0);
    SolutionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-solution',
            template: __importDefault(__webpack_require__(/*! raw-loader!./solution.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/solution/solution.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./solution.component.css */ "./src/app/solution/solution.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SolutionComponent);
    return SolutionComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ghersi/Documents/perso/GitCommandLinesGuide/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
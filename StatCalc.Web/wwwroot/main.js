(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
		var e = new Error('Cannot find module "' + req + '".');
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
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{title}}</h1>\r\n<app-stats></app-stats>\r\n<app-cards></app-cards>\r\n"

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

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'MFF working title'; // Change title - michaelc
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _stats_stats_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stats/stats.component */ "./src/app/stats/stats.component.ts");
/* harmony import */ var _cards_cards_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./cards/cards.component */ "./src/app/cards/cards.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _stats_stats_component__WEBPACK_IMPORTED_MODULE_5__["StatsComponent"],
                _cards_cards_component__WEBPACK_IMPORTED_MODULE_6__["CardsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/cards/cards.component.css":
/*!*******************************************!*\
  !*** ./src/app/cards/cards.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/cards/cards.component.html":
/*!********************************************!*\
  !*** ./src/app/cards/cards.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Cards:</h3>\r\n<table style=\"display:inline-block\">\r\n  <tr>\r\n    <th>Card 1</th>\r\n  </tr>\r\n  <tr><td>{{card1.name}}</td></tr>\r\n  <tr><td>Rank: {{rank}}</td><td>Grade</td></tr>\r\n  <tr><td>Stat1</td><td>{{stat1}}%</td></tr>\r\n  <tr><td>Stat2</td><td>{{stat2}}%</td></tr>\r\n  <tr><td>Stat3</td><td>{{stat3}}%</td></tr>\r\n  <tr><td>Stat4</td><td>{{stat4}}%</td></tr>\r\n  <tr><td>Stat5</td><td>{{stat5}}%</td></tr>\r\n  <tr><td>Stat6</td><td>{{stat6}}%</td></tr>\r\n</table>\r\n<table style=\"display:inline-block\">\r\n  <tr>\r\n    <th>Card 2</th>\r\n  </tr>\r\n  <tr><td>Name</td></tr>\r\n  <tr><td>Rank: {{rank}}</td><td>Grade</td></tr>\r\n  <tr><td>Stat1</td><td>{{stat1}}%</td></tr>\r\n  <tr><td>Stat2</td><td>{{stat2}}%</td></tr>\r\n  <tr><td>Stat3</td><td>{{stat3}}%</td></tr>\r\n  <tr><td>Stat4</td><td>{{stat4}}%</td></tr>\r\n  <tr><td>Stat5</td><td>{{stat5}}%</td></tr>\r\n  <tr><td>Stat6</td><td>{{stat6}}%</td></tr>\r\n</table>\r\n<table style=\"display:inline-block\">\r\n  <tr>\r\n    <th>Card 3</th>\r\n  </tr>\r\n  <tr><td>Name</td></tr>\r\n  <tr><td>Rank: {{rank}}</td><td>Grade</td></tr>\r\n  <tr><td>Stat1</td><td>{{stat1}}%</td></tr>\r\n  <tr><td>Stat2</td><td>{{stat2}}%</td></tr>\r\n  <tr><td>Stat3</td><td>{{stat3}}%</td></tr>\r\n  <tr><td>Stat4</td><td>{{stat4}}%</td></tr>\r\n  <tr><td>Stat5</td><td>{{stat5}}%</td></tr>\r\n  <tr><td>Stat6</td><td>{{stat6}}%</td></tr>\r\n</table>\r\n<table style=\"display:inline-block\">\r\n  <tr>\r\n    <th>Card 4</th>\r\n  </tr>\r\n  <tr><td>Name</td></tr>\r\n  <tr><td>Rank: {{rank}}</td><td>Grade</td></tr>\r\n  <tr><td>Stat1</td><td>{{stat1}}%</td></tr>\r\n  <tr><td>Stat2</td><td>{{stat2}}%</td></tr>\r\n  <tr><td>Stat3</td><td>{{stat3}}%</td></tr>\r\n  <tr><td>Stat4</td><td>{{stat4}}%</td></tr>\r\n  <tr><td>Stat5</td><td>{{stat5}}%</td></tr>\r\n  <tr><td>Stat6</td><td>{{stat6}}%</td></tr>\r\n</table>\r\n<table style=\"display:inline-block\">\r\n  <tr>\r\n    <th>Card 5</th>\r\n  </tr>\r\n  <tr><td>Name</td></tr>\r\n  <tr><td>Rank: {{rank}}</td><td>Grade</td></tr>\r\n  <tr><td>Stat1</td><td>{{stat1}}%</td></tr>\r\n  <tr><td>Stat2</td><td>{{stat2}}%</td></tr>\r\n  <tr><td>Stat3</td><td>{{stat3}}%</td></tr>\r\n  <tr><td>Stat4</td><td>{{stat4}}%</td></tr>\r\n  <tr><td>Stat5</td><td>{{stat5}}%</td></tr>\r\n  <tr><td>Stat6</td><td>{{stat6}}%</td></tr>\r\n</table>\r\n"

/***/ }),

/***/ "./src/app/cards/cards.component.ts":
/*!******************************************!*\
  !*** ./src/app/cards/cards.component.ts ***!
  \******************************************/
/*! exports provided: CardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardsComponent", function() { return CardsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _mock_cards__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mock-cards */ "./src/app/mock-cards.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CardsComponent = /** @class */ (function () {
    function CardsComponent() {
        this.card1 = _mock_cards__WEBPACK_IMPORTED_MODULE_1__["Cards"][0];
        this.rank = 6;
        this.stat3 = 5.1;
        this.stat4 = 5.4;
        this.stat5 = 5.7;
        this.stat6 = 6;
    }
    CardsComponent.prototype.ngOnInit = function () {
    };
    CardsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cards',
            template: __webpack_require__(/*! ./cards.component.html */ "./src/app/cards/cards.component.html"),
            styles: [__webpack_require__(/*! ./cards.component.css */ "./src/app/cards/cards.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CardsComponent);
    return CardsComponent;
}());



/***/ }),

/***/ "./src/app/mock-cards.ts":
/*!*******************************!*\
  !*** ./src/app/mock-cards.ts ***!
  \*******************************/
/*! exports provided: Cards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cards", function() { return Cards; });
var Cards = [
    {
        name: "Guardians of the Galaxy:Best Story Ever #1 (2015)",
        premium: true,
        rank: 6,
        grade: 7,
        stat1: "All Attack",
        stat2: "Max HP",
        stat3: "Attack Speed",
        stat4: "Skill Cooldown",
        stat5: "Energy Attack",
        stat6: "Physical Attack"
    }, {
        name: "Loki #2 (2004)",
        premium: true,
        rank: 6,
        grade: 7,
        stat1: "Energy Attack",
        stat2: "Ignore Defense",
        stat3: "Skill Cooldown",
        stat4: "Crit Rate",
        stat5: "Crit Damage",
        stat6: "All Attack"
    }
];


/***/ }),

/***/ "./src/app/stats/stats.component.css":
/*!*******************************************!*\
  !*** ./src/app/stats/stats.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stats/stats.component.html":
/*!********************************************!*\
  !*** ./src/app/stats/stats.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table>\r\n  <tr>\r\n    <th style=\"text-align: left\">Name</th>\r\n    <th>Current</th>\r\n    <th>Buffs</th>\r\n    <th>Difference</th>\r\n  </tr>\r\n  <tr>\r\n    <td>Skill Cooldown</td>\r\n    <td>{{baseStats.scd + buffStats.scd}}%</td>\r\n    <td>(+{{buffStats.scd}}%)</td>\r\n    <td>0</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Ignore Defense</td>\r\n    <td>{{baseStats.igdef + buffStats.igdef}}%</td>\r\n    <td>(+{{buffStats.igdef}}%)</td>\r\n    <td>0</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Attack Speed</td>\r\n    <td>{{baseStats.aspd + buffStats.aspd}}%</td>\r\n    <td>(+{{buffStats.aspd}}%)</td>\r\n    <td>0</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Critical Rate</td>\r\n    <td>{{baseStats.crtrate + buffStats.crtrate}}%</td>\r\n    <td>(+{{buffStats.crtrate}}%)</td>\r\n    <td>0</td>\r\n  </tr>\r\n  <tr>\r\n    <td>Critical Damage</td>\r\n    <td>{{baseStats.crtdmg + buffStats.crtdmg}}%</td>\r\n    <td>(+{{buffStats.crtdmg}}%)</td>\r\n    <td>0</td>\r\n  </tr>\r\n</table>\r\n\r\n<form style=\"padding-top: 2em\">\r\n  <label for=\"allianceCheck\">Alliance Level 30: </label>\r\n  <input [(ngModel)]=\"isChecked\" (change)=\"onCheck()\" type=\"checkbox\" name=\"allianceCheck\" />\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/stats/stats.component.ts":
/*!******************************************!*\
  !*** ./src/app/stats/stats.component.ts ***!
  \******************************************/
/*! exports provided: StatsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatsComponent", function() { return StatsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StatsComponent = /** @class */ (function () {
    function StatsComponent() {
        this.baseStats = {
            scd: 0,
            igdef: 0,
            aspd: 100,
            crtrate: 1,
            crtdmg: 115
        };
        this.buffStats = {
            scd: 14,
            igdef: 0,
            aspd: 0,
            crtrate: 14,
            crtdmg: 14
        };
        this.isChecked = true;
    }
    StatsComponent.prototype.onCheck = function () {
        console.log(this.isChecked);
        if (this.isChecked) {
            this.buffStats.scd = 14;
            this.buffStats.crtdmg = 14;
            this.buffStats.crtrate = 14;
        }
        else {
            this.buffStats.scd = 0;
            this.buffStats.crtdmg = 0;
            this.buffStats.crtrate = 0;
        }
    };
    StatsComponent.prototype.ngOnInit = function () {
    };
    StatsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stats',
            template: __webpack_require__(/*! ./stats.component.html */ "./src/app/stats/stats.component.html"),
            styles: [__webpack_require__(/*! ./stats.component.css */ "./src/app/stats/stats.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatsComponent);
    return StatsComponent;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects_test\MFF\StatCalc\StatCalc.Web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
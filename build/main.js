webpackJsonp([0],{

/***/ 203:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 203;

/***/ }),

/***/ 245:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 245;

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, http) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.columnDefs = [];
        this.rowData = [];
        this.filter = '';
        this.gridOptions = {
            context: {
                componentParent: this
            }
        };
        this.columnDefs = [
            { headerName: 'ID', field: 'id' },
            { headerName: 'Make', field: 'make' },
            { headerName: 'Model', field: 'model', editable: true, cellClass: ['col-editable'] },
            { headerName: 'Price', field: 'price' },
            { headerName: 'Field 5', field: 'price' },
            { headerName: 'Field 6', field: 'price' },
            { headerName: 'Field 7', field: 'price' },
            { headerName: 'Field 8', field: 'price' },
            { headerName: 'Field 9', field: 'price' },
        ];
        // this.rowData = [
        //     { make: 'Toyota', model: 'Celica', price: 35000 },
        //     { make: 'Ford', model: 'Mondeo', price: 32000 },
        //     { make: 'Porsche', model: 'Boxter', price: 72000 }
        // ];
        var PotentialMake = ['Toyota', 'Ford', 'Porsche'];
        var PotentialModel = ['Celica', 'Mondeo', 'Boxter'];
        var PotentialPrice = ['350000', '32000', '72000'];
        var PotentialData = [];
        for (var i = 0; i < 11; i++) {
            var rand1 = Math.floor(Math.random() * 3);
            var rand2 = Math.floor(Math.random() * 3);
            var rand3 = Math.floor(Math.random() * 3);
            PotentialData.push({ id: i, make: PotentialMake[rand1], model: PotentialModel[rand2], price: PotentialPrice[rand3] });
        }
        for (var i = 0; i < 3000; i++) {
            for (var j = 0; j < 11; j++) {
                this.rowData.push({
                    id: PotentialData[j].id + (11 * i),
                    make: PotentialData[j].make,
                    model: PotentialData[j].model,
                    price: PotentialData[j].price,
                });
            }
        }
    }
    HomePage.prototype.ngAfterViewInit = function () {
        // this.rowData = this.http.get('https://api.myjson.com/bins/15psn9');
        // setTimeout(()=>{
        //   let that = this;
        //   let gridDiv = document.getElementsByClassName("col-editable")[0];
        //   if(gridDiv){
        //     gridDiv.addEventListener('keydown', function(e:any) {
        //       if(e.key === 'ArrowDown') {
        //           var currentCell = that.gridOptions.api.getFocusedCell();
        //           var finalRowIndex = that.gridOptions.api.paginationGetRowCount()-1;
        //           // If we are editing the last row in the grid, don't move to next line
        //           if (currentCell.rowIndex === finalRowIndex) {
        //               return;
        //           }
        //           that.gridOptions.api.stopEditing();
        //           that.gridOptions.api.clearFocusedCell();
        //           that.gridOptions.api.startEditingCell({
        //             rowIndex: currentCell.rowIndex + 1,
        //             colKey: currentCell.column.colId
        //           });
        //       }
        //     });
        //   }
        // })
    };
    HomePage.prototype.onFilterTextChange = function (text) {
        console.log("TEXT", text);
        // this.filter = text;
    };
    HomePage.prototype.saveState = function () {
        var savedState = this.gridOptions.columnApi.getColumnState();
        localStorage.setItem('savedState', JSON.stringify(savedState));
    };
    HomePage.prototype.loadState = function () {
        var savedState = JSON.parse(localStorage.getItem('savedState'));
        this.gridOptions.columnApi.setColumnState(savedState);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/wanpinglim/Documents/ionicprojects/AgGridDemo/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ag-grid Demo\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n  <ion-list>\n  <ion-item>\n    <ion-label color="primary">Filter</ion-label>\n    <ion-input type="text" [(ngModel)]="filter" (keyup)="onFilterTextChange($event)"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <button ion-button (tap)="saveState()">Save state</button>\n    <button ion-button (tap)="loadState()">Load state</button>\n  </ion-item>\n</ion-list>\n\n  <ag-grid-angular \n    style="width: 100%; height: 70%;" \n    class="ag-theme-balham"\n    [enableSorting]="true"\n    [enableFilter]="true"\n    [pagination]="true"\n    [rowData]="rowData" \n    [columnDefs]="columnDefs"\n    [quickFilterText]="filter"\n    [gridOptions]="gridOptions"\n    >\n  </ag-grid-angular>\n  \n</ion-content>\n'/*ion-inline-end:"/Users/wanpinglim/Documents/ionicprojects/AgGridDemo/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(347);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 347:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ag_grid_angular__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ag_grid_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ag_grid_angular__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_http__ = __webpack_require__(290);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7_ag_grid_angular__["AgGridModule"].withComponents([]),
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__angular_common_http__["a" /* HttpClient */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 396:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/wanpinglim/Documents/ionicprojects/AgGridDemo/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/wanpinglim/Documents/ionicprojects/AgGridDemo/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[326]);
//# sourceMappingURL=main.js.map
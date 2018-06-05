webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_inputtext__ = __webpack_require__("./node_modules/primeng/inputtext.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_primeng_inputtext___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_primeng_inputtext__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_selectbutton__ = __webpack_require__("./node_modules/primeng/selectbutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_primeng_selectbutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_primeng_selectbutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_button__ = __webpack_require__("./node_modules/primeng/button.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_primeng_button___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_primeng_button__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_fileupload__ = __webpack_require__("./node_modules/primeng/fileupload.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_primeng_fileupload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_primeng_fileupload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_splitbutton__ = __webpack_require__("./node_modules/primeng/splitbutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_primeng_splitbutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_primeng_splitbutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_messages__ = __webpack_require__("./node_modules/primeng/messages.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_primeng_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_primeng_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_message__ = __webpack_require__("./node_modules/primeng/message.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_primeng_message___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_primeng_message__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_togglebutton__ = __webpack_require__("./node_modules/primeng/togglebutton.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_primeng_togglebutton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_primeng_togglebutton__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_progressbar__ = __webpack_require__("./node_modules/primeng/progressbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_primeng_progressbar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_primeng_progressbar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_table__ = __webpack_require__("./node_modules/primeng/table.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_primeng_table___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_primeng_table__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_progressspinner__ = __webpack_require__("./node_modules/primeng/progressspinner.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_primeng_progressspinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_primeng_progressspinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__book_book_component__ = __webpack_require__("./src/app/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__book_detail_book_detail_component__ = __webpack_require__("./src/app/book-detail/book-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__book_create_book_create_component__ = __webpack_require__("./src/app/book-create/book-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__book_edit_book_edit_component__ = __webpack_require__("./src/app/book-edit/book-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_common_locales_pl__ = __webpack_require__("./node_modules/@angular/common/locales/pl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_components_common_messageservice__ = __webpack_require__("./node_modules/primeng/components/common/messageservice.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_primeng_components_common_messageservice___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_primeng_components_common_messageservice__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























Object(__WEBPACK_IMPORTED_MODULE_22__angular_common__["registerLocaleData"])(__WEBPACK_IMPORTED_MODULE_21__angular_common_locales_pl__["a" /* default */], 'pl');


var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_16__book_book_component__["a" /* BookComponent */],
                __WEBPACK_IMPORTED_MODULE_17__book_detail_book_detail_component__["a" /* BookDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_18__book_create_book_create_component__["a" /* BookCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_19__book_edit_book_edit_component__["a" /* BookEditComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_4_primeng_inputtext__["InputTextModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6_primeng_button__["ButtonModule"],
                __WEBPACK_IMPORTED_MODULE_5_primeng_selectbutton__["SelectButtonModule"],
                __WEBPACK_IMPORTED_MODULE_7_primeng_fileupload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_8_primeng_splitbutton__["SplitButtonModule"],
                __WEBPACK_IMPORTED_MODULE_11_primeng_togglebutton__["ToggleButtonModule"],
                __WEBPACK_IMPORTED_MODULE_9_primeng_messages__["MessagesModule"],
                __WEBPACK_IMPORTED_MODULE_10_primeng_message__["MessageModule"],
                __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_12_primeng_progressbar__["ProgressBarModule"],
                __WEBPACK_IMPORTED_MODULE_14_primeng_progressspinner__["ProgressSpinnerModule"],
                __WEBPACK_IMPORTED_MODULE_13_primeng_table__["TableModule"],
                __WEBPACK_IMPORTED_MODULE_24__app_routes__["a" /* routing */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"], useValue: "pl" },
                __WEBPACK_IMPORTED_MODULE_23_primeng_components_common_messageservice__["MessageService"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_15__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_book_component__ = __webpack_require__("./src/app/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_detail_book_detail_component__ = __webpack_require__("./src/app/book-detail/book-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_create_book_create_component__ = __webpack_require__("./src/app/book-create/book-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__book_edit_book_edit_component__ = __webpack_require__("./src/app/book-edit/book-edit.component.ts");





var appRoutes = [
    {
        path: 'books',
        component: __WEBPACK_IMPORTED_MODULE_1__book_book_component__["a" /* BookComponent */],
        data: { title: 'Book List' }
    },
    {
        path: 'book-details/:id',
        component: __WEBPACK_IMPORTED_MODULE_2__book_detail_book_detail_component__["a" /* BookDetailComponent */],
        data: { title: 'Book Details' }
    },
    {
        path: 'book-create',
        component: __WEBPACK_IMPORTED_MODULE_3__book_create_book_create_component__["a" /* BookCreateComponent */],
        data: { title: 'Create Book' }
    },
    {
        path: 'book-edit/:id',
        component: __WEBPACK_IMPORTED_MODULE_4__book_edit_book_edit_component__["a" /* BookEditComponent */],
        data: { title: 'Edit Book' }
    },
    { path: '',
        redirectTo: '/books',
        pathMatch: 'full'
    }
];
// { enableTracing: true } // <-- debugging purposes only  
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/book-create/book-create.component.css":
/***/ (function(module, exports) {

module.exports = ".container > .header > a {\n    height: 50px;\n    margin: 20px;\n}\n\n.container > .logo > img{\n    height: 200px;\n    display: block;\n    margin: 25% auto;\n}\n\n.container > .subtitle{\n    margin-top: -30px;\n}\n\n@media screen and (max-width: 1024px) {\n    .container > .logo > img{\n        display: none;\n    }\n  }\n\n.container > .header{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}"

/***/ }),

/***/ "./src/app/book-create/book-create.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\n    <div class=\"ui-g-12 ui-md-12 ui-lg-12 header\">\n        <a [routerLink]=\"['/books']\" class=\"btn btn-default btn-lg\">\n          <span class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></span>\n        </a>\n        <h1>Dodaj nową pozycję</h1>\n    </div>\n    <div class=\"ui-g-12 ui-md-12 ui-lg-12 subtitle\">\n        <h4>Wprowadź dane dotyczące nowej pozycji</h4> \n    </div>\n    <div class=\"ui-g-12 ui-md-12 ui-lg-6\">\n      <form (ngSubmit)=\"saveBook()\" #bookForm=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"name\">Typ publikacji *</label>\n            <input pInputText type=\"text\" maxlength=\"13\" minlength=\"0\" class=\"form-control\" [(ngModel)]=\"book.publication_type\" name=\"isbn\">\n            <!-- <p-selectButton [options]=\"types\" [(ngModel)]=\"book.publication_type\" [ngModelOptions]=\"{standalone: true}\" required></p-selectButton> -->\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">ISBN </label>\n            <input pInputText type=\"text\" maxlength=\"13\" minlength=\"0\" class=\"form-control\" [(ngModel)]=\"book.isbn\" name=\"isbn\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Tytuł *</label>\n            <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.title\" name=\"title\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Autor/Autorzy (wymień po przecinku) *</label>\n            <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.author\" name=\"author\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Rok publikacji</label>\n            <input pInputText type=\"number\" class=\"form-control\" [(ngModel)]=\"book.published_year\" name=\"published_year\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Wydawnictwo</label>\n            <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.publisher\" name=\"publisher\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Link do księgarni / wersji PDF itp.</label>\n            <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.link\" name=\"link\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Krótki opis / uwagi</label>\n            <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.short_desc\" name=\"short_desc\">\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!bookForm.form.valid || book.publication_type === undefined\">Dodaj pozycję</button>\n          </div>\n        </form>\n    </div>\n  <div class=\"ui-g-12 ui-md-12 ui-lg-6 logo\">\n      <img src=\"../../favicon.png\" alt=\"Biblioteczny chomik\" />\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/book-create/book-create.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookCreateComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookCreateComponent = (function () {
    function BookCreateComponent(http, router) {
        this.http = http;
        this.router = router;
        this.book = {};
        this.types = [
            { label: 'Książka', value: 'Książka' },
            { label: 'Artykuł', value: 'Artykuł' },
            { label: 'Inne', value: 'Inne' }
        ];
    }
    BookCreateComponent.prototype.ngOnInit = function () {
    };
    BookCreateComponent.prototype.saveBook = function () {
        var _this = this;
        this.http.post('/book', this.book)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/book-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BookCreateComponent.prototype.loadBook = function (book) {
        this.http.post('/book-load', book)
            .subscribe(function (res) {
            console.log(res);
        }, function (err) {
            console.log(err);
        });
    };
    BookCreateComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-create',
            template: __webpack_require__("./src/app/book-create/book-create.component.html"),
            styles: [__webpack_require__("./src/app/book-create/book-create.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"]])
    ], BookCreateComponent);
    return BookCreateComponent;
}());



/***/ }),

/***/ "./src/app/book-detail/book-detail.component.css":
/***/ (function(module, exports) {

module.exports = ".container > .header > a {\n    height: 50px;\n    margin: 20px;\n}\n\n.container > .details > h4 {\n    margin-top: -20px;\n    margin-bottom: 30px;\n}\n\n.container > .logo > img{\n    height: 200px;\n    display: block;\n    margin: 25% auto;\n}\n\n.container > .subtitle{\n    margin-top: -30px;\n}\n\n@media screen and (max-width: 1024px) {\n    .container > .logo > img{\n        display: none;\n    }\n}\n\n.container > .buttons  {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    margin-bottom: 20px;\n}\n\n.container > .buttons > a {\n    margin-right: 30px;\n}\n\n.container > .progressSpinner{\n    margin-left: 40%;\n}"

/***/ }),

/***/ "./src/app/book-detail/book-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\n  <div class=\"ui-g-12 ui-md-12 ui-lg-12 header\">\n    <a [routerLink]=\"['/books']\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></span>\n    </a>    \n    <h1>{{ book.title }}</h1>\n  </div>\n  <p-progressSpinner class=\"ui-g-12 ui-md-12 ui-lg-12 progressSpinner\" *ngIf=\"loadingData\"></p-progressSpinner>\n  <div *ngIf=\"!loadingData\" class=\"ui-g-12 ui-md-12 ui-lg-6 details\">\n    <h4>Poniżej znajdują się szczegóły wybranej pozycji</h4> \n    <dl class=\"list\">\n      <dt>Typ publikacji</dt>\n      <dd style=\"margin-bottom: 15px;\">{{ book.publication_type }}</dd>\n      <dt>ISBN</dt>\n      <dd style=\"margin-bottom: 15px;\">{{ book.isbn }}</dd>\n      <dt>Tytuł</dt>\n      <dd style=\"margin-bottom: 15px;\">{{ book.title }}</dd>\n      <dt>Autor / Autorzy</dt>\n      <dd style=\"margin-bottom: 15px;\">{{ book.author }}</dd>\n      <dt>Rok publikacji</dt>\n      <dd style=\"margin-bottom: 15px;\">{{ book.published_year }}</dd>\n      <dt>Wydawnictwo</dt>\n      <dd style=\"margin-bottom: 15px;\">{{ book.publisher }}</dd>\n      <dt>Link do księgarni / wersji PDF itp.</dt>\n      <dd style=\"margin-bottom: 15px;\">{{ book.link }}</dd>\n      <dt>Krótki opis / uwagi</dt>\n      <dd style=\"margin-bottom: 15px;\">{{ book.short_desc }}</dd>\n      <dt>Data ostatniej aktualizacji wpisu</dt>\n      <dd style=\"margin-bottom: 15px;\">{{ book.updated_date | date:'short' }}</dd>\n    </dl>\n  </div>\n  <div *ngIf=\"!loadingData\" class=\"ui-g-12 ui-md-12 ui-lg-6 logo\">\n      <img src=\"../../favicon.png\" alt=\"Biblioteczny chomik\" />\n  </div>\n  <div class=\"col-md-12  buttons\">\n    <a [routerLink]=\"['/book-edit', book._id]\" class=\"btn btn-warning\">Edytuj wpis</a>\n    <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteBook(book._id)\">Usuń wpis</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/book-detail/book-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookDetailComponent = (function () {
    function BookDetailComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.book = {};
        this.loadingData = true;
        this.items = [
            { label: 'Plik BIBTEX', icon: 'fa-link', command: function () {
                    // TODO: pobranie pliku BIBTEX
                } },
            { label: 'Plik PDF', icon: 'fa-link', command: function () {
                    // TODO: pobranie pliku PDF
                } },
            { label: 'Plik TXT', icon: 'fa-link', command: function () {
                    // TODO: pobranie pliku TXT
                } },
            { label: 'Plik DOC', icon: 'fa-link', command: function () {
                    // TODO: pobranie pliku DOC
                } },
        ];
    }
    BookDetailComponent.prototype.ngOnInit = function () {
        this.getBookDetail(this.route.snapshot.params['id']);
    };
    BookDetailComponent.prototype.getBookDetail = function (id) {
        var _this = this;
        this.http.get('/book/' + id).subscribe(function (data) {
            _this.book = data;
            _this.loadingData = false;
        });
    };
    BookDetailComponent.prototype.deleteBook = function (id) {
        var _this = this;
        this.http.delete('/book/' + id)
            .subscribe(function (res) {
            _this.router.navigate(['/books']);
        }, function (err) {
            console.log(err);
        });
    };
    BookDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-detail',
            template: __webpack_require__("./src/app/book-detail/book-detail.component.html"),
            styles: [__webpack_require__("./src/app/book-detail/book-detail.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_2__angular_router__["ActivatedRoute"], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BookDetailComponent);
    return BookDetailComponent;
}());



/***/ }),

/***/ "./src/app/book-edit/book-edit.component.css":
/***/ (function(module, exports) {

module.exports = ".container > .header > a {\n    height: 50px;\n    margin: 20px;\n}\n\n.container > .logo > img{\n    height: 200px;\n    display: block;\n    margin: 25% auto;\n}\n\n.container > .subtitle{\n    margin-top: -30px;\n}\n\n.container > .form > form > .buttons{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n\n.container > .progressSpinner{\n    margin-left: 40%;\n}\n\n.container > .form > form > .buttons > div{\n    padding: 20px;\n}\n\n@media screen and (max-width: 1024px) {\n    .container > .logo > img{\n        display: none;\n    }\n}"

/***/ }),

/***/ "./src/app/book-edit/book-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\n  <div class=\"ui-g-12 ui-md-12 ui-lg-12 header\">\n      <a [routerLink]=\"['/books']\" class=\"btn btn-default btn-lg\">\n        <span class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></span>\n      </a>\n      <h1>Edytuj wybraną pozycję</h1>\n  </div>\n  <div class=\"ui-g-12 ui-md-12 ui-lg-12 subtitle\">\n      <h4>Wprowadź nowe dane dotyczące wybranej pozycji</h4> \n  </div>\n  <p-progressSpinner class=\"ui-g-12 ui-md-12 ui-lg-12 progressSpinner\" *ngIf=\"loadingData\"></p-progressSpinner>\n  <div *ngIf=\"!loadingData\" class=\"ui-g-12 ui-md-12 ui-lg-6 form\">\n      <form (ngSubmit)=\"updateBook(book._id)\" #bookForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Typ publikacji *</label>\n          <input pInputText type=\"text\" maxlength=\"13\" minlength=\"0\" class=\"form-control\" [(ngModel)]=\"book.publication_type\" name=\"isbn\">\n          <!-- <p-selectButton [options]=\"types\" [(ngModel)]=\"book.publication_type\" [ngModelOptions]=\"{standalone: true}\" required></p-selectButton> -->\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">ISBN</label>\n          <input pInputText maxlength=\"13\" minlength=\"0\" type=\"text\" class=\"form-control\" [(ngModel)]=\"book.isbn\" name=\"isbn\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Tytuł *</label>\n          <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.title\" name=\"title\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Autor/Autorzy (wymień po przecinku) *</label>\n          <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.author\" name=\"author\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Rok publikacji</label>\n          <input pInputText type=\"number\" class=\"form-control\" [(ngModel)]=\"book.published_year\" name=\"published_year\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Wydawnictwo</label>\n          <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.publisher\" name=\"publisher\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Link do księgarni / wersji PDF itp.</label>\n          <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.link\" name=\"link\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Krótki opis / uwagi</label>\n          <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.short_desc\" name=\"short_desc\">\n        </div>\n        <div class=\"buttons\">\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!bookForm.form.valid || book.publication_type === undefined\">Zapisz zmiany</button>\n          </div>\n          <div class=\"form-group\">\n            <button [routerLink]=\"['/book_details/' + book._id]\" class=\"btn btn-danger\">Anuluj</button>\n          </div>\n      </div>    \n    </form>\n  </div>\n  <div *ngIf=\"!loadingData\" class=\"ui-g-12 ui-md-12 ui-lg-6 logo\">\n      <img src=\"../../favicon.png\" alt=\"Biblioteczny chomik\" />\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/book-edit/book-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookEditComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookEditComponent = (function () {
    function BookEditComponent(http, router, route) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.book = {};
        this.loadingData = true;
        this.types = [
            { label: 'Książka', value: 'Książka' },
            { label: 'Artykuł', value: 'Artykuł' },
            { label: 'Inne', value: 'Inne' }
        ];
    }
    BookEditComponent.prototype.ngOnInit = function () {
        this.getBook(this.route.snapshot.params['id']);
    };
    BookEditComponent.prototype.getBook = function (id) {
        var _this = this;
        this.http.get('/book/' + id).subscribe(function (data) {
            _this.book = data;
            _this.loadingData = false;
        });
    };
    BookEditComponent.prototype.updateBook = function (id) {
        var _this = this;
        this.book.updated_date = Date.now();
        this.http.put('/book/' + id, this.book)
            .subscribe(function (res) {
            var id = res['_id'];
            _this.router.navigate(['/book-details', id]);
        }, function (err) {
            console.log(err);
        });
    };
    BookEditComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-edit',
            template: __webpack_require__("./src/app/book-edit/book-edit.component.html"),
            styles: [__webpack_require__("./src/app/book-edit/book-edit.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["Router"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["ActivatedRoute"]])
    ], BookEditComponent);
    return BookEditComponent;
}());



/***/ }),

/***/ "./src/app/book/book.component.css":
/***/ (function(module, exports) {

module.exports = ".container > .header{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n\n.container >  .header > img{\n    height: 50px;\n    margin: 20px;\n}\n\n.container >  table > tbody > tr > td > a{\n    cursor: pointer;\n}\n\n.container > .header > h1{\n    color: #cc0000;\n}\n\n.container > .header > h1{\n    color: #cc0000;\n}\n\n.container > h4{\n    margin-top: -10px;\n}\n\n.container  > .file-upload{\n    margin: 20px;\n}\n\n.container > .progressSpinner{\n    margin-left: 40%;\n}\n\n.container > button{\n    margin: 10px;\n}"

/***/ }),

/***/ "./src/app/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<p-messages [(value)]=\"msgs\"></p-messages>\n<div *ngIf=\"!passwordValidate\">\n    <h3 style=\"margin: 10px;\">Wprowadź hasło dostępowe</h3>\n<span style=\"margin: 10px;\" class=\"ui-float-label\">\n    <input id=\"float-input\" type=\"password\" size=\"30\" [(ngModel)]=\"password\" (keydown)=\"checkPassword($event)\" pInputText> \n</span>\n<span style=\"margin: 10px;\"><p-button (onClick)=\"checkPasswordButton()\" label=\"Wejdź do systemu\"></p-button></span>\n</div>\n<div *ngIf=\"passwordValidate\" class=\"ui-g container\">\n  <div class=\"ui-g-12 ui-md-12 ui-lg-12 header\">\n      <img src=\"../../favicon.png\" alt=\"Biblioteczny chomik\" />\n      <h1>Biblioteczny chomik\n        <a [routerLink]=\"['/book-create']\" class=\"btn btn-default btn-lg\">\n          <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n        </a>\n      </h1>\n  </div>\n  <h4>Poniżej znajduje się lista wszystkich pozycji dostępnych w bazie</h4>\n  <div *ngIf=\"addingObjects\" class=\"ui-g-12 ui-md-12 ui-lg-12\">\n    <h4>Trwa dodawanie obiektów do bazy...</h4>\n    <p-progressBar mode=\"indeterminate\" [style]=\"{'height': '6px'}\"></p-progressBar>\n  </div>   \n  <div class=\"ui-g-12 ui-md-12 ui-lg-12 file-upload\">\n    <label for=\"name\">Wgraj pozycje z pliku BIBTEX (możesz wybrać pliki metodą Drag and Drop)</label>\n    <p-fileUpload chooseLabel=\"Wybierz pliki z dysku\" uploadLabel=\"Wyślij plik\" \n    url=\"/book-load\" cancelLabel=\"Anuluj\" name=\"myfile[]\" (onUpload)=\"onUpload($event)\">\n    <ng-template pTemplate=\"content\">\n        <ul *ngIf=\"uploadedFiles.length\">\n            <li *ngFor=\"let file of uploadedFiles\">{{file.name}} - {{file.size}} bytes</li>\n        </ul> \n    </ng-template>        \n    </p-fileUpload>\n  </div>\n  <p-progressSpinner class=\"progressSpinner\" *ngIf=\"loadingData\"></p-progressSpinner>\n  <p-table #dt *ngIf=\"!loadingData\" [columns]=\"cols\" [value]=\"books\" [paginator]=\"true\" [rows]=\"15\">\n      <ng-template pTemplate=\"caption\">\n          <div style=\"text-align: right\">        \n              <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n              <input type=\"text\" pInputText size=\"50\" placeholder=\"Szukaj...\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n          </div>\n      </ng-template>\n      <ng-template pTemplate=\"header\" let-columns>\n          <tr>\n              <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\" [ngSwitch]=\"col.field\">\n                  <span *ngSwitchCase=\"'actions'\">{{col.header}}</span>\n                  <span *ngSwitchDefault>{{col.header}}<p-sortIcon [field]=\"col.field\"></p-sortIcon></span>\n\n              </th>\n          </tr>\n          <tr>\n              <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n                  <input *ngSwitchCase=\"'publication_type'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n                  <input *ngSwitchCase=\"'author'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n                  <input *ngSwitchCase=\"'title'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n                  <input *ngSwitchCase=\"'link'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n              </th>\n          </tr>\n      </ng-template>\n      <ng-template pTemplate=\"body\" let-book>\n          <tr>\n              <td>{{ book.publication_type }}</td>\n              <td>{{ book.author }}</td>\n              <td>{{ book.title }}</td>\n              <td><a href=\"http://{{book.link}}\" target=\"_blank\">{{ book.link }}</a></td>\n              <td>\n                <a [routerLink]=\"['/book-details', book._id]\"><button pButton type=\"button\" label=\"Więcej\" class=\"ui-button-warning\"></button></a>\n                <p-toggleButton *ngIf=\"!checkedAll\" [ngModel]=\"getStatus(book._id)\" (onChange)=\"updateTableWithIds(book, book._id, $event)\" onLabel=\"Wybrano\" offLabel=\"Nie wybrano\" onIcon=\"fa-check-square\" offIcon=\"fa-square\" [style]=\"{'margin':'5px'}\"></p-toggleButton>\n                <p-toggleButton *ngIf=\"checkedAll\" [(ngModel)]=\"checkedAll\" (onChange)=\"updateTableWithIds(book, book._id, $event)\" onLabel=\"Wybrano\" offLabel=\"Nie wybrano\" onIcon=\"fa-check-square\" offIcon=\"fa-square\" [style]=\"{'margin':'5px'}\"></p-toggleButton>\n              </td>\n          </tr>\n      </ng-template>\n  </p-table>\n  <button *ngIf=\"!loadingData\" pButton type=\"button\" (click)=\"selectAll()\" label=\"Zaznacz wszystkie do pobrania\" class=\"ui-button-info\"></button>\n  <button *ngIf=\"!loadingData\" pButton type=\"button\" (click)=\"unselectAll()\" label=\"Odznacz wszystkie\" class=\"ui-button-info\"></button>\n  <button *ngIf=\"!loadingData && (positionsToDownload.length > 0)\" pButton type=\"button\" (click)=\"downloadBibtexFile()\" label=\"Pobierz wybrane jako plik BIBTEX\" class=\"ui-button-success\"></button>\n</div> \n"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__ = __webpack_require__("./node_modules/file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookComponent = (function () {
    function BookComponent(http) {
        this.http = http;
        this.uploadedFiles = [];
        this.addingObjects = false;
        this.loadingData = true;
        this.cols = [];
        this.positionsToDownload = [];
        this.passwordValidate = false;
        this.password = '';
        this.checkedAll = false;
        this.statusForId = [];
    }
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.cols = [
            { field: 'publication_type', header: 'Typ publikacji' },
            { field: 'author', header: 'Autor' },
            { field: 'title', header: 'Tytuł' },
            { field: 'link', header: 'Link' },
            { field: 'actions', header: 'Akcje' }
        ];
        this.http.get('/book').subscribe(function (data) {
            _this.books = data;
            for (var _i = 0, _a = _this.books; _i < _a.length; _i++) {
                var book = _a[_i];
                _this.statusForId.push({ 'id': book._id, 'status': false });
            }
            _this.loadingData = false;
        });
    };
    BookComponent.prototype.checkPasswordButton = function () {
        if (this.password == 'adammalysz') {
            this.passwordValidate = true;
            this.msgs = [];
            this.msgs.push({ severity: 'success', summary: 'Hasło poprawne - uzyskałeś dostęp do Bibliograficznego Chomika.', detail: '' });
        }
        else {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Błędne hasło, spróbuj ponownie.', detail: '' });
        }
    };
    BookComponent.prototype.checkPassword = function (event) {
        if (event.keyCode == 13) {
            if (this.password == 'adammalysz') {
                this.passwordValidate = true;
                this.msgs = [];
                this.msgs.push({ severity: 'success', summary: 'Hasło poprawne - uzyskałeś dostęp do Bibliograficznego Chomika.', detail: '' });
            }
            else {
                this.msgs = [];
                this.msgs.push({ severity: 'error', summary: 'Błędne hasło, spróbuj ponownie.', detail: '' });
            }
        }
    };
    BookComponent.prototype.onUpload = function (event) {
        var _this = this;
        // TODO: Wiele plików !
        this.http.post('http://localhost:3000/book-load', event.files[0]).subscribe(function (res) {
            for (var _i = 0, _a = event.files; _i < _a.length; _i++) {
                var file = _a[_i];
                _this.uploadedFiles.push(file);
            }
            _this.msgs = [];
            _this.msgs.push({ severity: 'info', summary: 'Plik BIBTEX przesłany', detail: '' });
            var positions = JSON.stringify(res);
            var positionsJson = JSON.parse(positions);
            var length = positionsJson.length;
            var it = 0;
            for (var _b = 0, positionsJson_1 = positionsJson; _b < positionsJson_1.length; _b++) {
                var pj = positionsJson_1[_b];
                it++;
                var book = { publication_type: pj.entryType, title: pj.entryTags.title, author: pj.entryTags.author,
                    short_desc: pj.entryTags.note, published_year: pj.entryTags.year, publisher: pj.entryTags.journal };
                _this.http.post('/book', book).subscribe(function (res) {
                    _this.addingObjects = true;
                    _this.loadingData = true;
                });
                if (it == positionsJson.length) {
                    _this.books = [];
                    _this.http.get('/book').subscribe(function (data) {
                        _this.books = data;
                        _this.msgs.push({ severity: 'info', summary: 'Pozycje dodane do listy', detail: '' });
                        _this.addingObjects = false;
                        _this.loadingData = false;
                    });
                }
            }
        });
    };
    BookComponent.prototype.downloadBibtexFile = function () {
        var listToBlob = [];
        var index = 1;
        for (var _i = 0, _a = this.positionsToDownload; _i < _a.length; _i++) {
            var position = _a[_i];
            listToBlob.push('@' + position.publication_type + '{\nauthor={' + position.author +
                '},\n' + 'title={' + position.title + '},\n}\n\n');
            index++;
        }
        var blob = new Blob(listToBlob, { type: 'application/bib' });
        Object(__WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__["saveAs"])(blob, "bibliography_hamster_file.bib");
    };
    BookComponent.prototype.getStatus = function (id) {
        for (var _i = 0, _a = this.statusForId; _i < _a.length; _i++) {
            var book = _a[_i];
            if (book.id = id)
                return book.status;
        }
    };
    BookComponent.prototype.updateTableWithIds = function (book, id, event) {
        this.checkedAll = false;
        for (var _i = 0, _a = this.statusForId; _i < _a.length; _i++) {
            var b = _a[_i];
            if (b.id == id)
                b.status = event.checked;
        }
        var status = false;
        for (var _b = 0, _c = this.positionsToDownload; _b < _c.length; _b++) {
            var position = _c[_b];
            if ((position.id == id) && !event.checked) {
                var index = this.positionsToDownload.indexOf(position);
                this.positionsToDownload.splice(index, 1);
            }
        }
        if (!status && event.checked) {
            this.positionsToDownload.push({ id: book._id, publication_type: book.publication_type,
                title: book.title, author: book.author });
        }
    };
    BookComponent.prototype.selectAll = function () {
        this.positionsToDownload = [];
        for (var _i = 0, _a = this.books; _i < _a.length; _i++) {
            var book = _a[_i];
            this.positionsToDownload.push({ id: book._id, publication_type: book.publication_type,
                title: book.title, author: book.author });
        }
        for (var _b = 0, _c = this.statusForId; _b < _c.length; _b++) {
            var book = _c[_b];
            book.status = true;
        }
        this.checkedAll = true;
        console.log(this.statusForId);
    };
    BookComponent.prototype.unselectAll = function () {
        this.positionsToDownload = [];
        for (var _i = 0, _a = this.statusForId; _i < _a.length; _i++) {
            var book = _a[_i];
            book.status = false;
        }
        this.checkedAll = false;
    };
    BookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book',
            template: __webpack_require__("./src/app/book/book.component.html"),
            styles: [__webpack_require__("./src/app/book/book.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], BookComponent);
    return BookComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
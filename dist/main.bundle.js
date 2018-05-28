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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__book_book_component__ = __webpack_require__("./src/app/book/book.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__book_detail_book_detail_component__ = __webpack_require__("./src/app/book-detail/book-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__book_create_book_create_component__ = __webpack_require__("./src/app/book-create/book-create.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__book_edit_book_edit_component__ = __webpack_require__("./src/app/book-edit/book-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_locales_pl__ = __webpack_require__("./node_modules/@angular/common/locales/pl.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_routes__ = __webpack_require__("./src/app/app.routes.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















Object(__WEBPACK_IMPORTED_MODULE_16__angular_common__["registerLocaleData"])(__WEBPACK_IMPORTED_MODULE_15__angular_common_locales_pl__["a" /* default */], 'pl');

var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__book_book_component__["a" /* BookComponent */],
                __WEBPACK_IMPORTED_MODULE_11__book_detail_book_detail_component__["a" /* BookDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_12__book_create_book_create_component__["a" /* BookCreateComponent */],
                __WEBPACK_IMPORTED_MODULE_13__book_edit_book_edit_component__["a" /* BookEditComponent */]
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
                __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_17__app_routes__["a" /* routing */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["LOCALE_ID"], useValue: "pl" }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* AppComponent */]]
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

module.exports = "<div class=\"ui-g container\">\n    <div class=\"ui-g-12 ui-md-12 ui-lg-12 header\">\n        <a [routerLink]=\"['/books']\" class=\"btn btn-default btn-lg\">\n          <span class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></span>\n        </a>\n        <h1>Dodaj nową pozycję</h1>\n    </div>\n    <div class=\"ui-g-12 ui-md-12 ui-lg-12 subtitle\">\n        <h4>Wprowadź dane dotyczące nowej pozycji</h4> \n    </div>\n    <div class=\"ui-g-12 ui-md-12 ui-lg-6\">\n      <form (ngSubmit)=\"saveBook()\" #bookForm=\"ngForm\">\n          <div class=\"form-group\">\n            <label for=\"name\">Typ publikacji *</label>\n            <p-selectButton [options]=\"types\" [(ngModel)]=\"book.publication_type\" [ngModelOptions]=\"{standalone: true}\" required></p-selectButton>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">ISBN </label>\n            <input pInputText type=\"text\" maxlength=\"13\" minlength=\"13\" class=\"form-control\" [(ngModel)]=\"book.isbn\" name=\"isbn\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Tytuł *</label>\n            <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.title\" name=\"title\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Autor/Autorzy (wymień po przecinku) *</label>\n            <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.author\" name=\"author\" required>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Rok publikacji</label>\n            <input pInputText type=\"number\" class=\"form-control\" [(ngModel)]=\"book.published_year\" name=\"published_year\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Wydawnictwo</label>\n            <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.publisher\" name=\"publisher\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Link do księgarni / wersji PDF itp.</label>\n            <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.link\" name=\"link\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Krótki opis / uwagi</label>\n            <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.short_desc\" name=\"link\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"name\">Pliki BIBTEX / PDF itp. (możesz wybrać pliki metodą Drag and Drop)</label>\n            <p-fileUpload chooseLabel=\"Wybierz pliki z dysku\" uploadLabel=\"Wyślij na serwer\" cancelLabel=\"Anuluj\" name=\"myfile[]\" url=\"./upload.php\"></p-fileUpload>\n          </div>\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!bookForm.form.valid || book.publication_type === undefined\">Dodaj pozycję</button>\n          </div>\n        </form>\n    </div>\n  <div class=\"ui-g-12 ui-md-12 ui-lg-6 logo\">\n      <img src=\"../../favicon.png\" alt=\"Biblioteczny chomik\" />\n  </div>\n</div>\n"

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
        console.log(this.selectedType);
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

module.exports = ".container > .header > a {\n    height: 50px;\n    margin: 20px;\n}\n\n.container > .details > h4 {\n    margin-top: -20px;\n    margin-bottom: 30px;\n}\n\n.container > .logo > img{\n    height: 200px;\n    display: block;\n    margin: 25% auto;\n}\n\n.container > .subtitle{\n    margin-top: -30px;\n}\n\n@media screen and (max-width: 1024px) {\n    .container > .logo > img{\n        display: none;\n    }\n}\n\n.container > .buttons  {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    margin-bottom: 20px;\n}\n\n.container > .buttons > a {\n    margin-right: 30px;\n}"

/***/ }),

/***/ "./src/app/book-detail/book-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\n  <div class=\"ui-g-12 ui-md-12 ui-lg-12 header\">\n    <a [routerLink]=\"['/books']\" class=\"btn btn-default btn-lg\">\n      <span class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></span>\n    </a>    \n    <h1>{{ book.title }}</h1>\n  </div>\n  <div class=\"ui-g-12 ui-md-12 ui-lg-6 details\">\n    <h4>Poniżej znajdują się szczegóły wybranej pozycji</h4> \n    <dl class=\"list\">\n      <dt>Typ publikacji</dt>\n      <dd style=\"margin-bottom: 15px;\">{{ book.publication_type }}</dd>\n      <dt>ISBN</dt>\n      <dd style=\"margin-bottom: 15px;\">{{ book.isbn }}</dd>\n      <dt>Tytuł</dt>\n      <dd style=\"margin-bottom: 15px;\">{{ book.title }}</dd>\n      <dt>Autor / Autorzy</dt>\n      <dd style=\"margin-bottom: 15px;\">{{ book.author }}</dd>\n      <dt>Rok publikacji</dt>\n      <dd style=\"margin-bottom: 15px;\">{{ book.published_year }}</dd>\n      <dt>Wydawnictwo</dt>\n      <dd style=\"margin-bottom: 15px;\">{{ book.publisher }}</dd>\n      <dt>Link do księgarni / wersji PDF itp.</dt>\n      <dd style=\"margin-bottom: 15px;\">{{ book.link }}</dd>\n      <dt>Krótki opis / uwagi</dt>\n      <dd style=\"margin-bottom: 15px;\">{{ book.short_desc }}</dd>\n      <dt>Pliki</dt>\n      <dd style=\"margin-bottom: 15px;\"><p-splitButton label=\"Pobierz\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-warning\"></p-splitButton></dd>\n      <dt>Data ostatniej aktualizacji wpisu</dt>\n      <dd style=\"margin-bottom: 15px;\">{{ book.updated_date | date:'short' }}</dd>\n    </dl>\n  </div>\n  <div class=\"ui-g-12 ui-md-12 ui-lg-6 logo\">\n      <img src=\"../../favicon.png\" alt=\"Biblioteczny chomik\" />\n  </div>\n  <div class=\"col-md-12  buttons\">\n    <a [routerLink]=\"['/book-edit', book._id]\" class=\"btn btn-success\">Edytuj wpis</a>\n    <button class=\"btn btn-danger\" type=\"button\" (click)=\"deleteBook(book._id)\">Usuń wpis</button>\n  </div>\n</div>\n"

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

module.exports = ".container > .header > a {\n    height: 50px;\n    margin: 20px;\n}\n\n.container > .logo > img{\n    height: 200px;\n    display: block;\n    margin: 25% auto;\n}\n\n.container > .subtitle{\n    margin-top: -30px;\n}\n\n.container > .form > form > .buttons{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n\n.container > .form > form > .buttons > div{\n    padding: 20px;\n}\n\n@media screen and (max-width: 1024px) {\n    .container > .logo > img{\n        display: none;\n    }\n}"

/***/ }),

/***/ "./src/app/book-edit/book-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\n  <div class=\"ui-g-12 ui-md-12 ui-lg-12 header\">\n      <a [routerLink]=\"['/books']\" class=\"btn btn-default btn-lg\">\n        <span class=\"glyphicon glyphicon-arrow-left\" aria-hidden=\"true\"></span>\n      </a>\n      <h1>Edytuj wybraną pozycję</h1>\n  </div>\n  <div class=\"ui-g-12 ui-md-12 ui-lg-12 subtitle\">\n      <h4>Wprowadź nowe dane dotyczące wybranej pozycji</h4> \n  </div>\n  <div class=\"ui-g-12 ui-md-12 ui-lg-6 form\">\n      <form (ngSubmit)=\"updateBook(book._id)\" #bookForm=\"ngForm\">\n        <div class=\"form-group\">\n          <label for=\"name\">Typ publikacji *</label>\n          <p-selectButton [options]=\"types\" [(ngModel)]=\"book.publication_type\" [ngModelOptions]=\"{standalone: true}\" required></p-selectButton>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">ISBN</label>\n          <input pInputText maxlength=\"13\" minlength=\"13\" type=\"text\" class=\"form-control\" [(ngModel)]=\"book.isbn\" name=\"isbn\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Tytuł *</label>\n          <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.title\" name=\"title\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Autor/Autorzy (wymień po przecinku) *</label>\n          <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.author\" name=\"author\" required>\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Rok publikacji</label>\n          <input pInputText type=\"number\" class=\"form-control\" [(ngModel)]=\"book.published_year\" name=\"published_year\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Wydawnictwo</label>\n          <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.publisher\" name=\"publisher\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Link do księgarni / wersji PDF itp.</label>\n          <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.link\" name=\"link\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Krótki opis / uwagi</label>\n          <input pInputText type=\"text\" class=\"form-control\" [(ngModel)]=\"book.short_desc\" name=\"link\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"name\">Pliki BIBTEX / PDF itp. (możesz wybrać pliki metodą Drag and Drop)</label>\n          <p-fileUpload chooseLabel=\"Wybierz pliki z dysku\" uploadLabel=\"Wyślij na serwer\" cancelLabel=\"Anuluj\" name=\"myfile[]\" url=\"./upload.php\"></p-fileUpload>\n        </div>\n        <div class=\"buttons\">\n          <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!bookForm.form.valid || book.publication_type === undefined\">Zapisz zmiany</button>\n          </div>\n          <div class=\"form-group\">\n            <button [routerLink]=\"['/book_details/' + book._id]\" class=\"btn btn-danger\">Anuluj</button>\n          </div>\n      </div>    \n    </form>\n  </div>\n  <div class=\"ui-g-12 ui-md-12 ui-lg-6 logo\">\n      <img src=\"../../favicon.png\" alt=\"Biblioteczny chomik\" />\n  </div>\n</div>\n"

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

module.exports = ".container > .header{\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n\n.container >  .header > img{\n    height: 50px;\n    margin: 20px;\n}\n\n.container >  table > tbody > tr > td > a{\n    cursor: pointer;\n}\n\n.container > .header > h1{\n    color: #cc0000;\n}\n\n.container > .header > h1{\n    color: #cc0000;\n}\n\n.container > h4{\n    margin-top: -10px;\n}"

/***/ }),

/***/ "./src/app/book/book.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui-g container\">\n  <div class=\"ui-g-12 ui-md-12 ui-lg-12 header\">\n      <img src=\"../../favicon.png\" alt=\"Biblioteczny chomik\" />\n      <h1>Biblioteczny chomik\n        <a [routerLink]=\"['/book-create']\" class=\"btn btn-default btn-lg\">\n          <span class=\"glyphicon glyphicon-plus\" aria-hidden=\"true\"></span>\n        </a>\n      </h1>\n  </div>\n  <h4>Poniżej znajduje się lista wszystkich pozycji dostępnych w bazie</h4>    \n  <table class=\"ui-g- ui-md-12 ui-lg-12 table\">\n    <thead>\n      <tr>\n        <th>Typ publikacji</th> \n        <th>Autor</th>\n        <th>Tytuł</th> \n        <th>Pliki</th>\n        <th>Link</th>\n        <th></th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let book of books\">\n          <td>{{ book.publication_type }}</td>\n        <td>{{ book.author }}</td>\n        <td>{{ book.title }}</td>\n        <td><p-splitButton label=\"Pobierz\" icon=\"fa-check\" (onClick)=\"save()\" [model]=\"items\" styleClass=\"ui-button-warning\"></p-splitButton></td>\n        <td><a href=\"http://{{book.link}}\" target=\"_blank\">{{ book.link }}</a></td>\n        <td><a [routerLink]=\"['/book-details', book._id]\"><button pButton type=\"button\" label=\"Więcej\" class=\"ui-button-success\"></button></a></td>\n      </tr>\n    </tbody>\n  </table>\n</div> \n"

/***/ }),

/***/ "./src/app/book/book.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
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
    BookComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get('/book').subscribe(function (data) {
            _this.books = data;
        });
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
webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/_services/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants__ = __webpack_require__("../../../../../src/app/utils/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by manromero on 06/11/2017.
 */





var BookService = (function () {
    function BookService(http) {
        this.http = http;
    }
    /**
     * Devuelve todos los libros ordenados por title asc
     * @returns {Observable<R|T>}
     */
    BookService.prototype.findAllByTitleAsc = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* Constants */].API_ENDPOINT + 'book/findAllByTitleAsc';
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Promise.reject(error); });
    };
    /**
     * Devuelve un book por su id
     * @param idBook
     * @returns {Observable<R|T>}
     */
    BookService.prototype.findById = function (idBook) {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* Constants */].API_ENDPOINT + 'book/findById/' + idBook;
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Promise.reject(error); });
    };
    /**
     * Call to save a book
     * @param filmDto
     */
    BookService.prototype.save = function (bookDto) {
        var body = JSON.stringify(bookDto);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* Constants */].API_ENDPOINT + 'book/save';
        var response = this.http.post(url, body, options).map(function (res) { return res.json(); }).catch(function (error) { return Promise.reject(error); });
        return response;
    };
    /**
     * Elimina un libro
     * @param idBook
     * @returns {Observable<R|T>}
     */
    BookService.prototype.delete = function (idBook) {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* Constants */].API_ENDPOINT + 'book/delete/' + idBook;
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Promise.reject(error); });
    };
    /**
     * Call to to upload an image of a books
     * @param idBook
     * @param imageFile
     */
    BookService.prototype.uploadImage = function (idBook, imageFile) {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* Constants */].API_ENDPOINT + 'book/uploadImage/' + idBook;
        var response = this.http.post(url, imageFile).map(function (res) { return res.json(); }).catch(function (error) { return Promise.reject(error); });
        return response;
    };
    return BookService;
}());
BookService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BookService);

var _a;
//# sourceMappingURL=book.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/bookFile.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants__ = __webpack_require__("../../../../../src/app/utils/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookFileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by manromero on 07/11/2017.
 */





var BookFileService = (function () {
    function BookFileService(http) {
        this.http = http;
    }
    /**
     * Devuelve todos los archivos subidos de un determinado book
     * @param book seleccionado
     * @returns {Observable<R|T>}
     */
    BookFileService.prototype.findByIdBook = function (idBook) {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* Constants */].API_ENDPOINT + 'bookFile/findByIdBook/' + idBook;
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Promise.reject(error); });
    };
    /**
     * Elimina un libro fichero de un libro
     * @param idBookFile
     * @returns {Observable<R|T>}
     */
    BookFileService.prototype.delete = function (idBookFile) {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* Constants */].API_ENDPOINT + 'bookFile/delete/' + idBookFile;
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Promise.reject(error); });
    };
    /**
     * Call to to upload a file to the book
     * @param idBook
     * @param format
     * @param file
     */
    BookFileService.prototype.uploadFile = function (idBook, format, file) {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* Constants */].API_ENDPOINT + 'bookFile/uploadFile/' + idBook + '/' + format;
        var response = this.http.post(url, file).map(function (res) { return res.json(); }).catch(function (error) { return Promise.reject(error); });
        return response;
    };
    return BookFileService;
}());
BookFileService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BookFileService);

var _a;
//# sourceMappingURL=bookFile.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/bookType.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_constants__ = __webpack_require__("../../../../../src/app/utils/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookTypeService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by manromero on 06/11/2017.
 */





var BookTypeService = (function () {
    function BookTypeService(http) {
        this.http = http;
    }
    /**
     * Devuelve todos los tipos de libros ordenados por descripcion asc
     * @returns {Observable<R|T>}
     */
    BookTypeService.prototype.findAllByDescriptionDesc = function () {
        var url = __WEBPACK_IMPORTED_MODULE_2__utils_constants__["a" /* Constants */].API_ENDPOINT + 'bookType/findAllByDescriptionAsc';
        return this.http.get(url)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return Promise.reject(error); });
    };
    return BookTypeService;
}());
BookTypeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], BookTypeService);

var _a;
//# sourceMappingURL=bookType.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bookType_service__ = __webpack_require__("../../../../../src/app/_services/bookType.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__bookType_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_service__ = __webpack_require__("../../../../../src/app/_services/book.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__book_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bookFile_service__ = __webpack_require__("../../../../../src/app/_services/bookFile.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__bookFile_service__["a"]; });
/**
 * Created by manromero on 06/11/2017.
 */



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_validation__ = __webpack_require__("../../../../ng2-validation/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_validation___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_validation__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_buttons__ = __webpack_require__("../../../../ngx-bootstrap/buttons/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_constants__ = __webpack_require__("../../../../../src/app/utils/constants.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__books_books_component__ = __webpack_require__("../../../../../src/app/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_10__books_books_component__["a" /* BooksComponent */] },
    { path: __WEBPACK_IMPORTED_MODULE_9__utils_constants__["a" /* Constants */].RUTA_LISTADO_BOOKS, component: __WEBPACK_IMPORTED_MODULE_10__books_books_component__["a" /* BooksComponent */] },
    { path: '**', redirectTo: __WEBPACK_IMPORTED_MODULE_9__utils_constants__["a" /* Constants */].RUTA_LISTADO_BOOKS }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__books_books_component__["a" /* BooksComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_5_ng2_validation__["CustomFormsModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_6_ngx_bootstrap_buttons__["a" /* ButtonsModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_7_ngx_bootstrap_modal__["a" /* ModalModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__services_index__["a" /* BookTypeService */],
            __WEBPACK_IMPORTED_MODULE_11__services_index__["b" /* BookService */],
            __WEBPACK_IMPORTED_MODULE_11__services_index__["c" /* BookFileService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/books/books.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/books/books.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container margint30px\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"col-md-3\">\r\n\r\n      <div class=\"panel\">\r\n        <div class=\"panel-body\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <button class=\"btn btn-success btn-block\" (click)=\"createBook(viewModal)\">Nuevo Libro</button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"list-group margint20px\">\r\n            <button type=\"button\" class=\"list-group-item\" [ngClass]=\"{'active': bookTypeSelected == 0 }\" (click)=\"changeBookTypeSelected(0)\"> Todos </button>\r\n            <button type=\"button\" *ngFor=\"let bt of listBookType\" class=\"list-group-item\" [ngClass]=\"{'active': bookTypeSelected == bt.id }\" (click)=\"changeBookTypeSelected(bt.id)\"> {{bt.description}} </button>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"col-md-9\">\r\n\r\n      <div class=\"panel\">\r\n        <div class=\"panel-body\">\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-md-12\">\r\n              <input type=\"text\" placeholder=\"Título\" [(ngModel)]=\"filtroTitle\" (keyup)=\"filterBooksByIdBookTypeAndTitle()\" class=\"form-control width100 marginb4\">\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div *ngFor=\"let b of listBook\" class=\"col-md-4 marginb4\">\r\n              <div class=\"imageBorder cursorPointer\">\r\n                <img *ngIf=\"!b.cover\" width=\"100%\" height=\"240px\" src=\"../../assets/images/default.png\" (click)=\"openViewModal(viewModal, b.id)\">\r\n                <img *ngIf=\"b.cover\" width=\"100%\" height=\"240px\" src=\"data:image/png;base64,{{b.cover}}\" (click)=\"openViewModal(viewModal, b.id)\">\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-md-12 textAlignCenter\">\r\n                  <h4>{{b.title}}</h4>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div> <!-- termina row-->\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div><!-- termina row -->\r\n</div><!-- termina container-->\r\n\r\n<!-- Modal -->\r\n<ng-template #viewModal>\r\n\r\n  <!-- Visualizando el libro -->\r\n  <div class=\"modal-header\" *ngIf=\"!isBeingEdited\">\r\n    <h4 class=\"modal-title pull-left\">{{bookDto.title}} - {{bookDto.author}}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <!-- Editando/creando el libro -->\r\n  <div class=\"modal-header\" *ngIf=\"isBeingEdited\">\r\n    <h4 class=\"modal-title pull-left\">Edición / Creación Libro</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <!-- Visualizando el libro -->\r\n  <div class=\"modal-body\" *ngIf=\"!isBeingEdited\">\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-md-4\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12 imageBorder\">\r\n            <img *ngIf=\"!bookDto.cover\" width=\"100%\" height=\"300px\" src=\"../../assets/images/default.png\">\r\n            <img *ngIf=\"bookDto.cover\" width=\"100%\" height=\"300px\" src=\"data:image/png;base64,{{bookDto.cover}}\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row margint3\">\r\n          <div class=\"col-md-12\">\r\n            <button class=\"btn btn-default btn-block\" (click)=\"changeToEditMode()\">Editar</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col-md-8\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h4>Descripción:</h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <p>{{bookDto.description}}</p>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <button class=\"btn btn-primary btn-block\" *ngFor=\"let bf of listBookFile\" (click)=\"downloadBookFile(bf)\">Descargar libro en formato {{bf.format}}</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- Editando/creando el libro -->\r\n  <div class=\"modal-body\" *ngIf=\"isBeingEdited\">\r\n\r\n    <div class=\"row\" *ngIf=\"!deletedBook\">\r\n\r\n      <div class=\"col-md-5\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n\r\n            <!-- Form para subir imagen -->\r\n            <form>\r\n              <div class=\"form-group\">\r\n                <label for=\"portada\">Portada</label>\r\n                <input id=\"portada\" type=\"file\" multiple=\"false\" (change)=\"previewImage($event)\" accept=\"image/*\" [disabled]=\"!bookSaved\">\r\n              </div>\r\n\r\n              <div class=\"form-group textAlignCenter imageBorder\" *ngIf=\"imagePreview\">\r\n                <img width=\"270px\" height=\"300px\" [src]=\"imagePreview\">\r\n              </div>\r\n\r\n              <div class=\"form-group textAlignCenter imageBorder\" *ngIf=\"!imagePreview && bookDto.cover\">\r\n                <img width=\"270px\" height=\"300px\" src=\"data:image/png;base64,{{bookDto.cover}}\">\r\n              </div>\r\n\r\n              <div class=\"alert alert-danger\" *ngIf=\"errorImage\">{{errorImage}}</div>\r\n              <div class=\"alert alert-success\" *ngIf=\"okImageAdd\">La imagen se ha guardado correctamente</div>\r\n\r\n              <div class=\"form-group textAlignCenter\">\r\n                <button [disabled]=\"loadingImage ||!bookSaved\" (click)=\"uploadImage()\" class=\"btn btn-primary\">Editar Imagen</button>\r\n              </div>\r\n\r\n            </form>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div> <!-- Fin de la columna -->\r\n\r\n      <div class=\"col-md-7\">\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n\r\n            <form (ngSubmit)=\"saveBook(bookForm)\" #bookForm=\"ngForm\">\r\n\r\n              <!-- la version y el id estaran presentes cuando el book se este editando y no creando -->\r\n              <input *ngIf=\"bookDto.id\" type=\"hidden\" name=\"id\" [(ngModel)]=\"bookDto.id\" #id=\"ngModel\">\r\n              <input *ngIf=\"bookDto.version\" type=\"hidden\" name=\"version\" [(ngModel)]=\"bookDto.version\" #version=\"ngModel\">\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"title\">Título</label>\r\n                <input id=\"title\" name=\"title\" class=\"form-control\" type=\"text\" [(ngModel)]=\"bookDto.title\" #title=\"ngModel\" placeholder=\"Título\" required [rangeLength]=\"[1, 100]\"/>\r\n                <div *ngIf=\"(title.touched || bookForm.submitted) && title.hasError('required')\" class=\"alert alert-danger\">El Título del libro es obligatorio</div>\r\n                <div *ngIf=\"(title.touched || bookForm.submitted) && title.hasError('rangeLength')\" class=\"alert alert-danger\">El Título del libro debe estar comprendido entre 1 y 100 caracteres</div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"author\">Autor</label>\r\n                <input id=\"author\" name=\"author\" class=\"form-control\" type=\"text\" [(ngModel)]=\"bookDto.author\" #author=\"ngModel\" placeholder=\"Autor\" required [rangeLength]=\"[1, 100]\"/>\r\n                <div *ngIf=\"(author.touched || bookForm.submitted) && author.hasError('required')\" class=\"alert alert-danger\">El Autor del libro es obligatorio</div>\r\n                <div *ngIf=\"(author.touched || bookForm.submitted) && author.hasError('rangeLength')\" class=\"alert alert-danger\">El Autor del libro debe estar comprendido entre 1 y 100 caracteres</div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"description\">Descripción</label>\r\n                <textarea id=\"description\" name=\"description\" class=\"form-control\" type=\"text\" [(ngModel)]=\"bookDto.description\" #description=\"ngModel\" placeholder=\"Descripción\" required [rangeLength]=\"[1, 500]\"></textarea>\r\n                <div *ngIf=\"(description.touched || bookForm.submitted) && description.hasError('required')\" class=\"alert alert-danger\">La Descipción del libro es obligatoria</div>\r\n                <div *ngIf=\"(description.touched || bookForm.submitted) && description.hasError('rangeLength')\" class=\"alert alert-danger\">La Descripción del libro debe estar comprendida entre 1 y 500 caracteres</div>\r\n              </div>\r\n\r\n              <div class=\"form-group\">\r\n                <label for=\"bookTypeDto\">Género</label>\r\n                <select id=\"bookTypeDto\" name=\"bookTypeDto\" class=\"form-control\" [(ngModel)]=\"bookDto.bookTypeDto.id\" #bookTypeDto=\"ngModel\" required>\r\n                  <option [ngValue]=\"null\">Seleccione Género</option>\r\n                  <option *ngFor=\"let bt of listBookType\" [ngValue]=\"bt.id\">{{bt.description}}</option>\r\n                </select>\r\n                <div *ngIf=\"(bookTypeDto.touched || bookForm.submitted) && bookTypeDto.hasError('required')\" class=\"alert alert-danger\">El Género del libro es obligatorio</div>\r\n              </div>\r\n\r\n              <div class=\"alert alert-danger\" *ngIf=\"errorSaveBook\">{{errorSaveBook}}</div>\r\n              <div class=\"alert alert-success\" *ngIf=\"bookModified\">El Libro se ha guardado correctamente</div>\r\n\r\n              <div class=\"form-group\">\r\n                <div class=\"row\">\r\n                  <div class=\"col-md-4 col-md-offset-2 textAlignCenter\">\r\n                    <button type=\"button\" [disabled]=\"!bookDto || !bookDto.id\" (click)=\"openModal(modalDeleteBook)\" class=\"btn btn-danger btn-block\">Eliminar Libro</button>\r\n                  </div>\r\n                  <div class=\"col-md-4 textAlignCenter\">\r\n                    <button type=\"submit\" [disabled]=\"loadingBook\" class=\"btn btn-primary btn-block\">Guardar Libro</button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </form>\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n\r\n            <!-- Form para subir ficheros -->\r\n            <form>\r\n              <div class=\"form-group\">\r\n                <label for=\"bookFile\">Ficheros</label>\r\n                <input id=\"bookFile\" type=\"file\" multiple=\"false\" (change)=\"uploadBookFile($event)\" accept=\".pdf, .epub, .mobi, .txt\" [disabled]=\"!bookSaved\">\r\n              </div>\r\n\r\n              <div class=\"row margint10px\" *ngFor=\"let bf of listBookFile\">\r\n                <div class=\"col-md-9\">\r\n                  <button class=\"btn btn-default btn-block\" (click)=\"downloadBookFile(bf)\">Descargar libro en formato {{bf.format}}</button>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                  <button class=\"btn btn-danger btn-block\" (click)=\"deleteBookFile(bf.id)\">Eliminar</button>\r\n                </div>\r\n              </div>\r\n            </form>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div><!-- Fin de la columna -->\r\n\r\n    </div>\r\n\r\n    <div class=\"alert alert-success\" *ngIf=\"deletedBook\">El Libro se ha eliminado correctamente</div>\r\n\r\n\r\n  </div>\r\n\r\n</ng-template>\r\n\r\n<!-- Modal eliminar book -->\r\n<ng-template #modalDeleteBook>\r\n\r\n  <div class=\"modal-header\">\r\n    <h4 class=\"modal-title pull-left\">{{bookDto.title}} - {{bookDto.author}}</h4>\r\n    <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"modal-body\">\r\n    <h2>¿Desea eliminar el libro?</h2>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <button (click)=\"modalRef.hide()\" class=\"btn btn-primary btn-block\">No</button>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <button (click)=\"deleteBook()\" class=\"btn btn-danger btn-block\">Si</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/books/books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__ = __webpack_require__("../../../../ngx-bootstrap/modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__ = __webpack_require__("../../../../file-saver/FileSaver.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BooksComponent = (function () {
    function BooksComponent(bookTypeService, bookService, bookFileService, modalService) {
        var _this = this;
        this.bookTypeService = bookTypeService;
        this.bookService = bookService;
        this.bookFileService = bookFileService;
        this.modalService = modalService;
        // Variable que indica si se está editando un book
        this.isBeingEdited = false;
        // Indica si un book se ha eliminado correctamente
        this.deletedBook = false;
        // Indica si se esta procesando el guardado del book
        this.loadingBook = false;
        // Indica si la serie esta guardada en base de datos
        this.bookSaved = false;
        // Indica si una serie se ha guardado correctamente
        this.bookModified = false;
        // Activara y desactivara el boton de guardar imagen cuando se esté editando
        this.loadingImage = false;
        // Imagen añadida correctamente
        this.okImageAdd = false;
        console.log('Constructor BooksComponent');
        // Cargamos los tipos de book
        this.bookTypeService.findAllByDescriptionDesc().subscribe(function (data) { return _this.listBookType = data; });
        // Por defecto no habrá ningún tipo de book seleccionada
        this.bookTypeSelected = 0;
        // Recuperamos todos los books
        this.bookService.findAllByTitleAsc().subscribe(function (data) {
            _this.listFullBook = data;
            _this.listBook = data;
        }, function (error) {
            console.log(error);
        });
        // En un primer momento el filtro del title
        this.filtroTitle = '';
    }
    BooksComponent.prototype.ngOnInit = function () {
        console.log('NgOnInit BooksComponent');
    };
    /**
     * Cambia el tipo de categoria seleccionada
     * @param bookTypeSelectedId
     */
    BooksComponent.prototype.changeBookTypeSelected = function (bookTypeSelectedId) {
        this.bookTypeSelected = bookTypeSelectedId;
        this.filterBooksByIdBookTypeAndTitle();
    };
    /**
     * Filtra los books que se encuentran en el listado
     */
    BooksComponent.prototype.filterBooksByIdBookTypeAndTitle = function () {
        console.log('Filtro Books');
        // Si el filtro por title es vacio solo filtro por tipo
        if (this.filtroTitle === '') {
            // Si el filtro por tipo es 0 devuelvo todas los libros, si no filtro por tipo
            if (this.bookTypeSelected === 0) {
                this.listBook = this.listFullBook;
            }
            else {
                this.listBook = [];
                for (var _i = 0, _a = this.listFullBook; _i < _a.length; _i++) {
                    var book = _a[_i];
                    if (book.bookTypeDto.id === this.bookTypeSelected) {
                        this.listBook.push(book);
                    }
                }
            }
        }
        else {
            // Si el filtro de title no es vacio y el filtro de tipo es 0, solo filtro por su title
            if (this.bookTypeSelected === 0) {
                this.listBook = [];
                for (var _b = 0, _c = this.listFullBook; _b < _c.length; _b++) {
                    var book = _c[_b];
                    if (book.title.toLowerCase().includes(this.filtroTitle.toLowerCase())) {
                        this.listBook.push(book);
                    }
                }
            }
            else {
                // Si el filtro de title no es vacio y el de tipo no es 0, filtro por los dos tipos
                this.listBook = [];
                for (var _d = 0, _e = this.listFullBook; _d < _e.length; _d++) {
                    var book = _e[_d];
                    if (book.bookTypeDto.id === this.bookTypeSelected && book.title.toLowerCase().includes(this.filtroTitle.toLowerCase())) {
                        this.listBook.push(book);
                    }
                }
            }
        }
    };
    /**
     * Abrir modal al seleccionar un libro
     * @param {TemplateRef<any>} templateRef
     * @param idBook
     */
    BooksComponent.prototype.openViewModal = function (templateRef, idBook) {
        var _this = this;
        this.bookService.findById(idBook).subscribe(function (data) {
            console.log('se ha recuperado el video seleccionado');
            _this.bookDto = data;
            // Recuperamos los ficheros de descarga asociados al libro
            _this.bookFileService.findByIdBook(idBook).subscribe(function (data2) { return _this.listBookFile = data2; });
            // El modal no se mostrará en formato edicion
            _this.isBeingEdited = false;
            _this.modalRef = _this.modalService.show(templateRef, Object.assign({ class: 'modal-lg' }));
        }, function (error) {
            console.log(error);
        }, function () {
            console.log('Llamada a recuperar book terminada');
        });
    };
    /**
     * Abre el modal para crear un nuevo libro
     * @param templateRef
     */
    BooksComponent.prototype.createBook = function (templateRef) {
        // Inicializamos el bookDto
        this.bookDto = {};
        this.bookDto.bookTypeDto = { id: null };
        // El listado de ficheros en un primer momento es vacio
        this.listBookFile = [];
        // Muestra el modal en modo edicion
        this.isBeingEdited = true;
        // Indica que un book se ha eliminado
        this.deletedBook = false;
        // Indica si se ha producido algun error al guardar el book
        this.errorSaveBook = null;
        // Indica si se está procesando el guardado del book
        this.loadingBook = false;
        // El book proviene de base de datos
        this.bookSaved = false;
        // Indica si una serie se ha guardado correctamente
        this.bookModified = false;
        // Indica si una imagen se ha añadido correctamente
        this.okImageAdd = false;
        // Indica si se ha producido un error al añadir una imagen
        this.errorImage = null;
        // Abre el modal
        this.modalRef = this.modalService.show(templateRef, Object.assign({ class: 'modal-lg' }));
    };
    /**
     * Abrir modal
     * @param {TemplateRef<any>} referenciaModal
     */
    BooksComponent.prototype.openModal = function (referenciaModal) {
        this.modalRef = this.modalService.show(referenciaModal);
    };
    /**
     * El modal de visualizacion pasa a verse en modo editicion
     */
    BooksComponent.prototype.changeToEditMode = function () {
        // Muestra el modal en modo edicion
        this.isBeingEdited = true;
        // Indica que un book se ha eliminado
        this.deletedBook = false;
        // Indica si se ha producido algun error al guardar el book
        this.errorSaveBook = null;
        // Indica si se está procesando el guardado del book
        this.loadingBook = false;
        // El book proviene de base de datos
        this.bookSaved = true;
        // Indica si una serie se ha guardado correctamente
        this.bookModified = false;
        // Indica si una imagen se ha añadido correctamente
        this.okImageAdd = false;
        // Indica si se ha producido un error al añadir una imagen
        this.errorImage = null;
    };
    /**
     * Guarda/Actualiza un book si tiene los datos rellenados correctamente
     * @param bookForm
     */
    BooksComponent.prototype.saveBook = function (bookForm) {
        var _this = this;
        console.log('Llamada a saveBook');
        this.errorSaveBook = null;
        if (bookForm.valid) {
            // Desactivaremos el botón de guardar hasta que la llamada al web service haya finalizado
            this.loadingBook = true;
            // Si tiene id y no tiene la version, es porque su valor vale 0
            if (bookForm.value.id && !bookForm.value.version) {
                bookForm.value.version = 0;
            }
            // Creamos el bookTypeDto dentro de bookDto
            var idBookType = bookForm.value.bookTypeDto;
            bookForm.value.bookTypeDto = { id: idBookType };
            this.bookService.save(bookForm.value).subscribe(function (data) {
                _this.bookDto = data;
                // Estará bien guardado si no devuelve errores
                _this.bookSaved = _this.bookDto.errores.length === 0;
                _this.bookModified = _this.bookSaved;
                if (!_this.bookSaved) {
                    _this.errorSaveBook = 'Se ha producido un error al guardar la seriea';
                }
                else {
                    // Actualizamos el listado de libros
                    _this.bookService.findAllByTitleAsc().subscribe(function (data2) {
                        _this.listFullBook = data2;
                        _this.filterBooksByIdBookTypeAndTitle();
                    }, function (error) {
                        console.log(error);
                    });
                }
            }, function (error) {
                _this.loadingBook = false;
                _this.bookModified = false;
                _this.errorSaveBook = 'Se ha producido un error al guardar el libro';
                console.log(error);
            }, function () {
                _this.loadingBook = false;
                console.log('LLamada terminada');
            });
        }
        else {
            this.errorSaveBook = 'Se ha producido un error al guardar el libro';
            console.log('Error en el formulario de guardar book');
        }
    };
    /**
     * Realiza la llamada al servicio para eliminar un libro
     */
    BooksComponent.prototype.deleteBook = function () {
        var _this = this;
        this.bookService.delete(this.bookDto.id).subscribe(function (result) {
            _this.modalRef.hide();
            _this.deletedBook = true;
            // Actualizamos el listado de libros
            _this.bookService.findAllByTitleAsc().subscribe(function (data) {
                _this.listFullBook = data;
                _this.filterBooksByIdBookTypeAndTitle();
            }, function (error) {
                console.log(error);
            });
        }, function (error) {
            console.log(error);
        }, function () {
            console.log('Llamada terminada');
        });
    };
    /**
     * Previsualizamos imagen
     * @param {Event} imageInput
     */
    BooksComponent.prototype.previewImage = function (imageInput) {
        var _this = this;
        var target = imageInput.target;
        if (target.files && target.files[0]) {
            // Imagen a premostrar
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.imagePreview = event.target.result;
            };
            reader.readAsDataURL(target.files[0]);
        }
    };
    /**
     * Subir imagen al servidor
     */
    BooksComponent.prototype.uploadImage = function () {
        var _this = this;
        var inputEl = document.getElementById('portada');
        if (inputEl.files && inputEl.files[0]) {
            this.loadingImage = true;
            var formData = new FormData();
            formData.append('file', inputEl.files[0]);
            this.errorImage = null;
            this.bookService.uploadImage(this.bookDto.id, formData)
                .subscribe(function (result) {
                _this.bookDto = result;
                _this.okImageAdd = _this.bookDto.cover !== undefined && _this.bookDto.cover != null;
                if (!_this.okImageAdd) {
                    _this.errorImage = 'Se ha producido un error al subir la imagen';
                }
                _this.loadingImage = false;
                // Actualizamos el listado de libros
                _this.bookService.findAllByTitleAsc().subscribe(function (data) {
                    _this.listFullBook = data;
                    _this.filterBooksByIdBookTypeAndTitle();
                }, function (error) {
                    console.log(error);
                });
                console.log('File Upload');
            }, function (error) {
                _this.okImageAdd = false;
                _this.errorImage = 'Se ha producido un error al subir la imagen';
                _this.loadingImage = false;
                console.log(error);
            }, function () {
                _this.loadingImage = false;
                console.log('Llamada terminada');
            });
        }
    };
    /**
     * Sbuir un fichero asociado a un book
     * @param event
     */
    BooksComponent.prototype.uploadBookFile = function (event) {
        var _this = this;
        var inputEl = document.getElementById('bookFile');
        if (inputEl.files && inputEl.files[0]) {
            var fileName = inputEl.files[0].name;
            var partsToFormat = fileName.split('.');
            if (partsToFormat != null && partsToFormat.length > 1) {
                var format = partsToFormat[partsToFormat.length - 1];
                var formData = new FormData();
                formData.append('file', inputEl.files[0]);
                this.bookFileService.uploadFile(this.bookDto.id, format, formData).subscribe(function (result) {
                    // El fichero se ha subido correctamente
                    // Actualizamos la lista de ficheros
                    _this.bookFileService.findByIdBook(_this.bookDto.id).subscribe(function (data) { return _this.listBookFile = data; });
                }, function (error) {
                    console.log(error);
                }, function () {
                    console.log('Llamada a subir fichero finalizada');
                });
            }
        }
    };
    /**
     * Descarga un book file
     * @param bookFile
     */
    BooksComponent.prototype.downloadBookFile = function (bookFileDto) {
        var filename = this.bookDto.title + ' (' + this.bookDto.author + ').' + bookFileDto.format;
        fetch('data:application/' + bookFileDto.format + ';base64,' + bookFileDto.file)
            .then(function (resp) { return resp.blob(); })
            .then(function (blob) {
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_file_saver_FileSaver__["saveAs"])(blob, filename);
        });
    };
    /**
     * Elimina un bookFile
     * @param idBookFile
     */
    BooksComponent.prototype.deleteBookFile = function (idBookFile) {
        var _this = this;
        this.bookFileService.delete(idBookFile).subscribe(function (data) {
            // Actualizamos la lista de fichero de un book
            _this.bookFileService.findByIdBook(_this.bookDto.id).subscribe(function (data2) { return _this.listBookFile = data2; });
        }, function (error) {
            console.log(error);
        });
    };
    return BooksComponent;
}());
BooksComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__("../../../../../src/app/books/books.component.html"),
        styles: [__webpack_require__("../../../../../src/app/books/books.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* BookTypeService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* BookTypeService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* BookService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* BookService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* BookFileService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["c" /* BookFileService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* BsModalService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_ngx_bootstrap_modal__["b" /* BsModalService */]) === "function" && _d || Object])
], BooksComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=books.component.js.map

/***/ }),

/***/ "../../../../../src/app/utils/constants.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Constants; });
/**
 * Created by manromero on 06/11/2017.
 */
// Dirección base de la url para acceder al web service
var Constants = (function () {
    function Constants() {
    }
    return Constants;
}());

// Dirección base de la url para acceder al web service
Constants.API_ENDPOINT = 'https://rlibrary.herokuapp.com/';
// Rutas
Constants.RUTA_LISTADO_BOOKS = 'books';
//# sourceMappingURL=constants.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
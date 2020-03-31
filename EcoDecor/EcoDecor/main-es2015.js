(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n<!-- <app-homepage></app-homepage> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bath/bath.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bath/bath.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<div class=\"bg\">\n\n<app-logo></app-logo><br>\n<app-header></app-header><br><br><br>\n<p class=\"p6\">TOWELS & BATH MATS</p>\n<div class=\"row\">\n  <div class=\"col-md-4\" *ngFor=\"let product of products\">\n    <div *ngIf=\"product.type == 1\">\n    <div class=\"card mb-4 shadow-sm\">\n      <div class=\"imageBox\">\n        <div class=\"imageInn\">\n      <img class=\"bd-placeholder-img card-img-top p-2\" width=\"100%\" [src]=\"product.photo\" />\n        </div>\n        <div class=\"hoverImg\">\n        <img class=\"bd-placeholder-img card-img-top p-2\" width=\"100%\" [src]=\"product.photo1\" />    \n        </div>\n      \n      <div class=\"card-body\">\n        <p class=\"card-text\">\n          <strong>{{ product.name }}</strong><br><br>\n          <strong >{{ product.price | currency:'INR' }}</strong >\n        </p>\n        <!-- <p class=\"card-text\">{{ productItem.description }}</p> -->\n        <div class=\"d-flex justify-content-between align-items-center\">\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\"><a [routerLink]=\"['/cart', { id:product.id }]\">Add to Cart</a></button>\n            <button type=\"button\" class=\"btn btn-light btn-sm\">View Details</button>\n          </div>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<p class=\"p6\">SHOWER CURTAINS</p>\n<div class=\"row\">\n  <div class=\"col-md-4\" *ngFor=\"let product of products\">\n    <div *ngIf=\"product.type == 8\">\n    <div class=\"card mb-4 shadow-sm\">\n      <div class=\"imageBox\">\n        <div class=\"imageInn\">\n      <img class=\"bd-placeholder-img card-img-top p-2\" width=\"100%\" [src]=\"product.photo\" />\n        </div>\n        <div class=\"hoverImg\">\n        <img class=\"bd-placeholder-img card-img-top p-2\" width=\"100%\" [src]=\"product.photo1\" />    \n        </div>\n      \n      <div class=\"card-body\">\n        <p class=\"card-text\">\n          <strong>{{ product.name }}</strong><br><br>\n          <strong >{{ product.price | currency:'INR' }}</strong >\n        </p>\n        <!-- <p class=\"card-text\">{{ productItem.description }}</p> -->\n        <div class=\"d-flex justify-content-between align-items-center\">\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\"><a [routerLink]=\"['/cart', { id:product.id }]\">Add to Cart</a></button>\n            <button type=\"button\" class=\"btn btn-light btn-sm\">View Details</button>\n          </div>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<p class=\"p6\">TABLEWARE</p>\n<div class=\"row\">\n  <div class=\"col-md-4\" *ngFor=\"let product of products\">\n    <div *ngIf=\"product.type == 9\">\n    <div class=\"card mb-4 shadow-sm\">\n      <div class=\"imageBox\">\n        <div class=\"imageInn\">\n      <img class=\"bd-placeholder-img card-img-top p-2\" width=\"100%\" [src]=\"product.photo\" />\n        </div>\n        <div class=\"hoverImg\">\n        <img class=\"bd-placeholder-img card-img-top p-2\" width=\"100%\" [src]=\"product.photo1\" />    \n        </div>\n      \n      <div class=\"card-body\">\n        <p class=\"card-text\">\n          <strong>{{ product.name }}</strong><br><br>\n          <strong >{{ product.price | currency:'INR' }}</strong >\n        </p>\n        <!-- <p class=\"card-text\">{{ productItem.description }}</p> -->\n        <div class=\"d-flex justify-content-between align-items-center\">\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\"><a [routerLink]=\"['/cart', { id:product.id }]\">Add to Cart</a></button>\n            <button type=\"button\" class=\"btn btn-light btn-sm\">View Details</button>\n          </div>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<br>\n<br>\n\n<app-footer></app-footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/bedding/bedding.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/bedding/bedding.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<div class=\"bg\">\n\n<app-logo></app-logo><br>\n<app-header></app-header><br><br><br>\n<p class=\"p6\">BED BLANKETS</p>\n<div class=\"row\">\n  <div class=\"col-md-4\" *ngFor=\"let product of products\">\n    <div *ngIf=\"product.type == 2\">\n    <div class=\"card mb-4 shadow-sm\">\n      <div class=\"imageBox\">\n        <div class=\"imageInn\">\n      <img class=\"bd-placeholder-img card-img-top p-2\" width=\"100%\" [src]=\"product.photo\" />\n        </div>\n        <div class=\"hoverImg\">\n        <img class=\"bd-placeholder-img card-img-top p-2\" width=\"100%\" [src]=\"product.photo1\" />    \n        </div>\n      \n      <div class=\"card-body\">\n        <p class=\"card-text\">\n          <strong>{{ product.name }}</strong><br><br>\n          <strong >{{ product.price | currency:'INR' }}</strong >\n        </p>\n        <!-- <p class=\"card-text\">{{ productItem.description }}</p> -->\n        <div class=\"d-flex justify-content-between align-items-center\">\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\"><a [routerLink]=\"['/cart', { id:product.id }]\">Add to Cart</a></button>\n            <button type=\"button\" class=\"btn btn-light btn-sm\">View Details</button>\n          </div>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<p class=\"p6\">SHEETS & PILLOWCASES</p>\n<div class=\"row\">\n  <div class=\"col-md-4\" *ngFor=\"let product of products\">\n    <div *ngIf=\"product.type == 6\">\n    <div class=\"card mb-4 shadow-sm\">\n      <div class=\"imageBox\">\n        <div class=\"imageInn\">\n      <img class=\"bd-placeholder-img card-img-top p-2\" width=\"100%\" [src]=\"product.photo\" />\n        </div>\n        <div class=\"hoverImg\">\n        <img class=\"bd-placeholder-img card-img-top p-2\" width=\"100%\" [src]=\"product.photo1\" />    \n        </div>\n      \n      <div class=\"card-body\">\n        <p class=\"card-text\">\n          <strong>{{ product.name }}</strong><br><br>\n          <strong >{{ product.price | currency:'INR' }}</strong >\n        </p>\n        <!-- <p class=\"card-text\">{{ productItem.description }}</p> -->\n        <div class=\"d-flex justify-content-between align-items-center\">\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\"><a [routerLink]=\"['/cart', { id:product.id }]\">Add to Cart</a></button>\n            <button type=\"button\" class=\"btn btn-light btn-sm\">View Details</button>\n          </div>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- <p class=\"p6\">DUVETS & QUILTS</p>\n<div class=\"row\">\n  <div class=\"col-md-4\" *ngFor=\"let product of products\">\n    <div *ngIf=\"product.type == 7\">\n    <div class=\"card mb-4 shadow-sm\">\n      <div class=\"imageBox\">\n        <div class=\"imageInn\">\n      <img class=\"bd-placeholder-img card-img-top p-2\" width=\"100%\" [src]=\"product.photo\" />\n        </div>\n        <div class=\"hoverImg\">\n        <img class=\"bd-placeholder-img card-img-top p-2\" width=\"100%\" [src]=\"product.photo1\" />    \n        </div>\n      \n      <div class=\"card-body\">\n        <p class=\"card-text\">\n          <strong>{{ product.name }}</strong><br><br>\n          <strong >{{ product.price | currency:'INR' }}</strong >\n        </p>\n        <div class=\"d-flex justify-content-between align-items-center\">\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\"><a [routerLink]=\"['/cart', { id:product.id }]\">Add to Cart</a></button>\n            <button type=\"button\" class=\"btn btn-light btn-sm\">View Details</button>\n          </div>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n<br>\n<br>\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<div class=\"row\">\n    <div class=\"column\">\n      <div class=\"card\">\n        <img src=\"/assets/bedding2.jpg\" alt=\"Avatar\" style=\"width:100%\">\n        <button class=\"btn\"><b>Bedding</b></button>\n      </div>\n    </div>\n  \n    <div class=\"column\">\n      <div class=\"card\">\n        <img src=\"/assets/furniture3.jpg\" alt=\"Avatar\" style=\"width:100%\">\n        <button class=\"btn\"><b>Furniture</b></button>\n      </div>\n    </div>\n    \n    <div class=\"column\">\n      <div class=\"card\">\n        <img src=\"/assets/bk.jpg\" alt=\"Avatar\" style=\"width:100%\">\n        <button class=\"btn\"><b>Bath & Kitchen</b></button>\n      </div>\n    </div>\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=bg>\n<app-logo></app-logo><br>\n<app-header></app-header><br><br><br>\n\n<h3>Cart Info</h3>\n<table class=\"table table-striped\">\n    <thead class=\"thead-dark\">\n    <tr>\n        \n        <th scope=\"col\">Id</th>\n        <th scope=\"col\">Name</th>\n        <th scope=\"col\">Photo</th>\n        <th scope=\"col\">Price</th>\n        <th scope=\"col\">Quantity</th>\n        <th scope=\"col\">Sub Total</th>\n        <th scope=\"col\">Delete</th>\n    </tr>\n</thead>\n<tbody>\n    <tr *ngFor=\"let item of items\">\n        \n        <td style=\"vertical-align: middle;\">{{item.product.id}}</td>\n        <td style=\"vertical-align: middle;\">{{item.product.name}}</td>\n        <td>\n            <img src=\"{{item.product.photo}}\" width=\"100\">\n        </td>\n        <td style=\"vertical-align: middle;\">{{item.product.price | currency:'INR'}}</td>\n        <td style=\"vertical-align: middle;\">{{item.quantity}}</td>\n        <td style=\"vertical-align: middle;\">{{item.product.price * item.quantity | currency:'INR'}}</td>\n        <td style=\"vertical-align: middle;\">\n            <a (click)=\"remove(item.product.id)\">\n                <span class=\"glyphicon glyphicon-trash\" aria-hidden=\"true\"></span>\n            </a>\n            \n        </td>\n    </tr>\n    <tr>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td></td>\n        <td><b>Total</b></td>\n        <td><b>{{total | currency:'INR'}}</b></td>\n    </tr>\n</tbody>\n</table>\n\n\n<app-footer></app-footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/flip-cards/flip-cards.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/flip-cards/flip-cards.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\" style=\"justify-content: center;\">\n    <div class=\"flip-card\" style=\"margin-top: 25px;\">\n    <div class=\"flip-card-inner\">\n      <div class=\"flip-card-front\" >\n        <img src=\"/assets/f1.jpg\" alt=\"Avatar\" style=\"width:200px;height:400px;\">\n      </div>\n      <div class=\"flip-card-back\" style=\"padding-top: 55px;\">\n        <p>We believe an object is only as beautiful as the environment in which it’s made. \n          That’s why we travel the globe to bring the world’s best craftsmanship home to you.</p>\n<p>Each collection is made with the finest materials. All thoughtfully designed and ethically \n  crafted by master artisans.</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"flip-card\">\n    <div class=\"flip-card-inner\">\n      <div class=\"flip-card-front\" >\n        <img src=\"/assets/f4.jpg\" alt=\"Avatar\" style=\"width:200px;height:400px;\">\n      </div>\n      <div class=\"flip-card-back\" style=\"padding-top: 40px;\">\n        <p>The year was 1921, and the Machado brothers found themselves opening their first textile mill \n          on the banks of the Vizela River in Northern Portugal. They made a commitment to \n          using only the highest quality materials and production techniques.</p>\n\n          <p>Fast forward 100 years, and today, it just takes one touch of the mill’s super-soft fabrics \n            to tell their plan worked out. </p> \n        \n      </div>\n    </div>\n  </div>\n  <div class=\"flip-card\" style=\"margin-top: 25px;\">\n    <div class=\"flip-card-inner\">\n      <div class=\"flip-card-front\">\n        <img src=\"/assets/f3.jpg\" alt=\"Avatar\" style=\"width:200px;height:400px;\">\n      </div>\n      <div class=\"flip-card-back\" style=\"padding-top: 55px;\">\n        \n        <p>A modern take on India's rich craft culture.\n          Soft earth tones, lots of texture, and a dose of architectural elements.</p> \n        <p>The crafts of India are diverse, rich in history, culture and religion. The craft of each state in \n          India reflect the influence of different empires. </p>\n      </div>\n    </div>\n  </div>\n  <div class=\"flip-card\">\n    <div class=\"flip-card-inner\">\n      <div class=\"flip-card-front\">\n        <img src=\"/assets/f2.jpg\" alt=\"Avatar\" style=\"width:200px;height:400px;\">\n      </div>\n      <div class=\"flip-card-back\" style=\"padding-top: 20px;\">\n        \n        <p>Behind a nondescript door in Mexico City’s San Rafael neighborhood, you’ll find a workshop \n          that’s a masterpiece in itself – twenty foot ceilings, factory windows, and perfectly organized \n          stacks of wood, leathers, and machinery.</p> \n        <p>Today, this workshop is made up of 20 skilled craftsmen.For months, they have worked tirelessly to perfect every detail. \n          The end result is nothing less than magic.</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"flip-card\" style=\"margin-top: 25px;\">\n    <div class=\"flip-card-inner\">\n      <div class=\"flip-card-front\">\n        <img src=\"/assets/f5.jpg\" alt=\"Avatar\" style=\"width:200px;height:400px;\">\n      </div>\n      <div class=\"flip-card-back\" style=\"padding-top: 30px;\">\n        <p>Driving through the NH-7 in India, on either side of the highway, one witnesses a \n          photogenic landscape of deciduous Teak trees, paddy fields, and a cluster of potters \n          practicing earthenware and clay works. </p><p>Inhabited by approximately 100 households, the \n          village is native to the traditional potter community, vernacularly known as Kumhaars.</p> \n        \n      </div>\n    </div>\n  </div>\n</div>\n<br><br>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section id=\"footer\">\n  <button class=\"block\" onclick=\"window.location.href = '#Home';\"><b>Back To Home</b></button>\n  <div class=\"container\">\n    <div class=\"row text-center text-xs-center text-sm-left text-md-left\">\n      <div class=\"col-xs-12 col-sm-4 col-md-4\">\n        <h5><b>CONTACT US</b></h5>\n        <ul class=\"list-unstyled quick-links\">\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>9876543210</a></li>\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>ecodecor@gmail.com</a></li>\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Chandigarh, Sec-17</a></li>\n        </ul>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 col-md-4\">\n        <h5><b>ABOUT US</b></h5>\n        <ul class=\"list-unstyled quick-links\">\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Home</a></li>\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>About</a></li>\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Get Started</a></li>\n        </ul>\n      </div>\n      <div class=\"col-xs-12 col-sm-4 col-md-4\">\n        <h5><b>CLIENT EXPERIENCE</b></h5>\n        <ul class=\"list-unstyled quick-links\">\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Account</a></li>\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Cart</a></li>\n          <li><a href=\"javascript:void();\"><i class=\"fa fa-angle-double-right\"></i>Gift Cards</a></li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5\">\n        <ul class=\"list-unstyled list-inline social text-center\">\n          <li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-facebook\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-twitter\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-instagram\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"javascript:void();\"><i class=\"fa fa-google-plus\"></i></a></li>\n          <li class=\"list-inline-item\"><a href=\"javascript:void();\" target=\"_blank\"><i class=\"fa fa-envelope\"></i></a></li>\n        </ul>\n      </div>\n    </div>\t\n    \t\n  </div>\n</section>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/furniture/furniture.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/furniture/furniture.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css\">\n<div class=\"bg\">\n\n<app-logo></app-logo><br>\n<app-header></app-header><br><br><br>\n<p class=\"p6\">CHAIRS</p>\n<div class=\"row\">\n  <div class=\"col-md-4\" *ngFor=\"let product of products\">\n    <div *ngIf=\"product.type == 3\">\n    <div class=\"card mb-4 shadow-sm\">\n      <div class=\"imageBox\">\n        <div class=\"imageInn\">\n      <img class=\"bd-placeholder-img card-img-top p-2\" width=\"100%\" [src]=\"product.photo\" />\n        </div>\n        <div class=\"hoverImg\">\n        <img class=\"bd-placeholder-img card-img-top p-2\" width=\"100%\" [src]=\"product.photo1\" />    \n        </div>\n      \n      <div class=\"card-body\">\n        <p class=\"card-text\">\n          <strong>{{ product.name }}</strong><br><br>\n          <strong >{{ product.price | currency:'INR' }}</strong >\n        </p>\n        <!-- <p class=\"card-text\">{{ productItem.description }}</p> -->\n        <div class=\"d-flex justify-content-between align-items-center\">\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\"><a [routerLink]=\"['/cart', { id:product.id }]\">Add to Cart</a></button>\n            <button type=\"button\" class=\"btn btn-light btn-sm\">View Details</button>\n          </div>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<p class=\"p6\">TABLES & SHELVES</p>\n<div class=\"row\">\n  <div class=\"col-md-4\" *ngFor=\"let product of products\">\n    <div *ngIf=\"product.type == 4\">\n    <div class=\"card mb-4 shadow-sm\">\n      <div class=\"imageBox\">\n        <div class=\"imageInn\">\n      <img class=\"bd-placeholder-img card-img-top p-2\" width=\"100%\" [src]=\"product.photo\" />\n        </div>\n        <div class=\"hoverImg\">\n        <img class=\"bd-placeholder-img card-img-top p-2\" width=\"100%\" [src]=\"product.photo1\" />    \n        </div>\n      \n      <div class=\"card-body\">\n        <p class=\"card-text\">\n          <strong>{{ product.name }}</strong><br><br>\n          <strong >{{ product.price | currency:'INR' }}</strong >\n        </p>\n        <!-- <p class=\"card-text\">{{ productItem.description }}</p> -->\n        <div class=\"d-flex justify-content-between align-items-center\">\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\"><a [routerLink]=\"['/cart', { id:product.id }]\">Add to Cart</a></button>\n            <button type=\"button\" class=\"btn btn-light btn-sm\">View Details</button>\n          </div>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<p class=\"p6\">OTTOMANS & POUFS</p>\n<div class=\"row\">\n  <div class=\"col-md-4\" *ngFor=\"let product of products\">\n    <div *ngIf=\"product.type == 5\">\n    <div class=\"card mb-4 shadow-sm\">\n      <div class=\"imageBox\">\n        <div class=\"imageInn\">\n      <img class=\"bd-placeholder-img card-img-top p-2\" width=\"100%\" [src]=\"product.photo\" />\n        </div>\n        <div class=\"hoverImg\">\n        <img class=\"bd-placeholder-img card-img-top p-2\" width=\"100%\" [src]=\"product.photo1\" />    \n        </div>\n      \n      <div class=\"card-body\">\n        <p class=\"card-text\">\n          <strong>{{ product.name }}</strong><br><br>\n          <strong >{{ product.price | currency:'INR' }}</strong >\n        </p>\n        <!-- <p class=\"card-text\">{{ productItem.description }}</p> -->\n        <div class=\"d-flex justify-content-between align-items-center\">\n          <div class=\"btn-group\">\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\"><a [routerLink]=\"['/cart', { id:product.id }]\">Add to Cart</a></button>\n            <button type=\"button\" class=\"btn btn-light btn-sm\">View Details</button>\n          </div>\n          </div>\n        </div>\n      </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<br>\n<br>\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table align=\"right\">\n    <tr>\n      <td id=\"Home\"><a routerLink='/'><b>HOME</b></a></td>\n      <td>\n        <div class=\"subnav\" >\n          <button class=\"subnavbtn\"><a routerLink='/bedding'><b>BEDDING </b></a><i class=\"fa fa-caret-down\"></i></button>\n          <div class=\"subnav-content\" >\n            \n            <br>\n            <div class=\"vl\">\n              <a href=\"#careers\">Bed Blankets</a><br>\n            <a href=\"#team\">Sheets & Pillowcases</a><br>\n            <a href=\"#careers\">Duvets & Quilts</a><br>\n            <br>\n            </div>\n            \n            <img class=\"navpics\" src=\"assets/beddingnav.jpg\">\n              <img class=\"navpics\" src=\"assets/badding2nav.jpg\">\n              \n             \n          </div>\n          \n        </div></td>\n      <td><div class=\"subnav\">\n        <button class=\"subnavbtn\"><a routerLink='/furniture'><b>FURNITURE </b></a><i class=\"fa fa-caret-down\"></i></button>\n        <div class=\"subnav-content\">\n          \n          <br>\n          <div class=\"vl\">\n          <a href=\"#company\">Chairs</a><br>\n          <a href=\"#team\">Tables & Shelves</a><br>\n          <a href=\"#careers\">Ottomans & poufs</a>\n          <br>\n          <br>\n          </div>\n          <img class=\"navpics\" src=\"assets/furniture1.jpg\">\n          <img class=\"navpics\" src=\"assets/furniture2.jpg\">\n        </div>\n      </div></td>\n      <td><div class=\"subnav\">\n        <button class=\"subnavbtn\"><a routerLink='/bath'><b>BATH & KITCHEN </b></a><i class=\"fa fa-caret-down\"></i></button>\n        <div class=\"subnav-content\" >\n          <br>\n          <div class=\"vl\">\n          <a href=\"#company\">Towels & Bath Mats</a><br>\n          <a href=\"#careers\">Shower Curtains</a><br>\n          <a href=\"#team\">Tableware</a>\n          \n          <br>\n          <br>\n          <!-- <div class=\"vl\"></div> --></div>\n          <img class=\"navpics\" src=\"assets/bk1.jpg\">\n          <img class=\"navpics\" src=\"assets/bk2.jpg\">\n        </div>\n      </div></td>\n      <td style=\"color: #cb2027;\"><b>SIGN OUT</b></td>\n    </tr>\n  </table>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=bg>\n    <div class=\"bgrnd\">\n    <app-logo></app-logo>\n    <br>\n    <app-header></app-header>\n</div>\n<app-card></app-card>\n<app-our-story></app-our-story>\n<app-flip-cards></app-flip-cards>\n<app-footer></app-footer>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n        <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\n        <script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n        <!------ Include the above in your HEAD tag ---------->\n        <div class=\"sidenav\">\n                 <div class=\"login-main-text\">\n                    <h2 class=\"c1\">ECO<br>DECOR</h2>\n                    <p class=\"p1\">Login or register from here to access.</p>\n                 </div>\n              </div>\n              <div class=\"main\">\n                 <div class=\"col-md-6 col-sm-12\">\n                    <div class=\"login-form\">\n                       <!-- <form>\n                          <div class=\"form-group\">\n                             <label>User Name</label>\n                             <input type=\"text\" class=\"form-control\" placeholder=\"User Name\" required\n                             [(ngModel)]=\"Name\" name=\"name\">\n                          </div>\n                          <div class=\"form-group\">\n                             <label>Password</label>\n                             <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"Password\">\n                          </div>\n                          <div class=\"form-group\">\n                             <label>Email</label>\n                             <input type=\"email\" class=\"form-control\" placeholder=\"Email\" required [(ngmodel)]=\"Email\">\n                          </div>\n                          <button type=\"submit\" class=\"btn btn-black\">SignUp</button>\n                          <button type=\"submit\" class=\"btn btn-secondary\">Register</button> \n                       </form> -->\n                       <form (ngSubmit)=\"onLogin(postForm)\" #postForm=\"ngForm\">\n                              <mat-form-field>\n                                <label>First Name</label>\n                                <input matInput type=\"text\" class=\"form-control\" placeholder=\"Enter first name\" minlength=\"3\" type=\"text\" required #firstName=\"ngModel\" ngModel name=\"firstName\">\n                                <mat-error *ngIf=\"firstName.invalid\">Please enter valid name</mat-error>\n                              </mat-form-field><br>\n                              <!-- <mat-form-field>\n                              <input matInput placeholder=\"Enter last name\" minlength=\"3\" type=\"text\" required #lname=\"ngModel\" ngModel name=\"lname\">\n                              <mat-error *ngIf=\"lname.invalid\" color=\"accent\">Please enter valid name</mat-error>\n                                </mat-form-field><br><br> -->\n                                <mat-form-field>\n                                   <label>Last Name</label>\n                                   <input matInput type=\"text\" class=\"form-control\" placeholder=\"Enter last name\" minlength=\"3\" type=\"text\" required #lastName=\"ngModel\" ngModel name=\"lastName\">\n                                   <mat-error *ngIf=\"lastName.invalid\">Please enter valid name</mat-error>\n                                 </mat-form-field><br>\n\n                                 <mat-form-field>\n                                    <label>Phone No.</label>\n                                    <input matInput type=\"text\" class=\"form-control\" placeholder=\"Enter phone no.\" minlength=\"3\" type=\"text\" required #mob=\"ngModel\" ngModel name=\"mob\">\n                                    <mat-error *ngIf=\"mob.invalid\">Please enter valid number</mat-error>\n                                  </mat-form-field><br>\n\n                                 <mat-form-field>\n                                   <label>Email</label>\n                                <input matInput type=\"text\" class=\"form-control\" placeholder=\"Enter email\" type=\"email\" required #email=\"ngModel\" ngModel email name=\"email\">\n                                <mat-error *ngIf=\"email.invalid\">Please enter valid mail</mat-error>\n                                  </mat-form-field><br>\n                               \n                              \n                                  <!-- <mat-form-field>\n                                     \n                                  <input matInput placeholder=\"Enter Phone No.\" type=\"text\" pattern=\"[0-9]{10}\"\n                                  required #phone=\"ngModel\" ngModel name=\"phone\">\n                                  <mat-error *ngIf=\"phone.invalid\">Please enter valid mobile number</mat-error>\n                                    </mat-form-field><br><br> -->\n                                    <div class=\"example-container\">\n                            <mat-form-field>\n                             <label>Password:</label>\n                              <input matInput type=\"text\" class=\"form-control\" placeholder=\"Enter your password\" required #password=\"ngModel\" ngModel name=\"password\">\n                              <!-- <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                              <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon> -->\n                              <!-- </button> -->\n                            </mat-form-field></div>\n                            <button type=\"submit\" class=\"btn btn-black\">Login</button>\n                            </form> \n                    </div>\n                 </div>\n              </div>\n        \n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/logo/logo.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/logo/logo.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\n  <button class=\"btn\"><a routerLink='/cart'><span class=\"glyphicon glyphicon-shopping-cart\"></span></a></button>\n  <img src=\"assets/logof.png\">\n  <button type=\"button\" class=\"btn btn-danger\"><a routerLink='/login'>Login</a></button>\n  <button type=\"button\" class=\"btn btn-danger\"><a routerLink='/signup'>Sign Up</a></button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/our-story/our-story.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/our-story/our-story.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<br>\n<p>Our Story</p>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("        <link href=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" id=\"bootstrap-css\">\n        <script src=\"//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js\"></script>\n        <script src=\"//code.jquery.com/jquery-1.11.1.min.js\"></script>\n        <!------ Include the above in your HEAD tag ---------->\n        <div class=\"sidenav\">\n                 <div class=\"login-main-text\">\n                    <h2 class=\"c1\">ECO<br>DECOR</h2>\n                    <p class=\"p1\">Login or register from here to access.</p>\n                 </div>\n              </div>\n              <div class=\"main\">\n                 <div class=\"col-md-6 col-sm-12\">\n                    <div class=\"login-form\">\n                       <!-- <form>\n                          <div class=\"form-group\">\n                             <label>User Name</label>\n                             <input type=\"text\" class=\"form-control\" placeholder=\"User Name\" required\n                             [(ngModel)]=\"Name\" name=\"name\">\n                          </div>\n                          <div class=\"form-group\">\n                             <label>Password</label>\n                             <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required [(ngModel)]=\"Password\">\n                          </div>\n                          <div class=\"form-group\">\n                             <label>Email</label>\n                             <input type=\"email\" class=\"form-control\" placeholder=\"Email\" required [(ngmodel)]=\"Email\">\n                          </div>\n                          <button type=\"submit\" class=\"btn btn-black\">SignUp</button>\n                          <button type=\"submit\" class=\"btn btn-secondary\">Register</button> \n                       </form> -->\n                       <form (ngSubmit)=\"onAddPost(postForm)\" #postForm=\"ngForm\">\n                              <mat-form-field>\n                                <!-- <label>First Name</label> -->\n                                <input matInput type=\"text\" class=\"form-control\" placeholder=\"Enter first name\" minlength=\"3\" type=\"text\" required #firstName=\"ngModel\" ngModel name=\"firstName\">\n                                <mat-error *ngIf=\"firstName.invalid\">Please enter valid name</mat-error>\n                              </mat-form-field><br>\n                              <!-- <mat-form-field>\n                              <input matInput placeholder=\"Enter last name\" minlength=\"3\" type=\"text\" required #lname=\"ngModel\" ngModel name=\"lname\">\n                              <mat-error *ngIf=\"lname.invalid\" color=\"accent\">Please enter valid name</mat-error>\n                                </mat-form-field><br><br> -->\n                                <mat-form-field>\n                                   <!-- <label>Last Name</label> -->\n                                   <input matInput type=\"text\" class=\"form-control\" placeholder=\"Enter last name\" minlength=\"3\" type=\"text\" required #lastName=\"ngModel\" ngModel name=\"lastName\">\n                                   <mat-error *ngIf=\"lastName.invalid\">Please enter valid name</mat-error>\n                                 </mat-form-field><br>\n                                 <mat-form-field>\n                                    <!-- <label>Phone No.</label> -->\n                                    <input matInput type=\"text\" class=\"form-control\" placeholder=\"Enter phone no.\" minlength=\"3\" type=\"text\" required #mob=\"ngModel\" ngModel name=\"mob\">\n                                    <mat-error *ngIf=\"mob.invalid\">Please enter valid number</mat-error>\n                                  </mat-form-field><br>\n                                 <mat-form-field>\n                                   <!-- <label>Email</label> -->\n                                <input matInput type=\"text\" class=\"form-control\" placeholder=\"Enter email\" type=\"email\" required #email=\"ngModel\" ngModel email name=\"email\">\n                                <mat-error *ngIf=\"email.invalid\">Please enter valid mail</mat-error>\n                                  </mat-form-field><br>\n                                \n                              \n                                  <!-- <mat-form-field>\n                                     \n                                  <input matInput placeholder=\"Enter Phone No.\" type=\"text\" pattern=\"[0-9]{10}\"\n                                  required #phone=\"ngModel\" ngModel name=\"phone\">\n                                  <mat-error *ngIf=\"phone.invalid\">Please enter valid mobile number</mat-error>\n                                    </mat-form-field><br><br> -->\n                                    <div class=\"example-container\">\n                            <mat-form-field>\n                             <!-- <label>Password:</label> -->\n                              <input matInput type=\"text\" class=\"form-control\" placeholder=\"Enter your password\" required #password=\"ngModel\" ngModel name=\"password\">\n                              <!-- <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n                              <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon> -->\n                              <!-- </button> -->\n                            </mat-form-field></div>\n                            <button type=\"submit\" class=\"btn btn-black\">SignUp</button>\n                            </form> \n                    </div>\n                 </div>\n              </div>\n        \n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .bgrnd{\r\n    background-image: url(\"/assets/background.jpg\"); \r\nheight: 650px;\r\nwidth:100%;\r\nbackground-position:center;\r\n\tbackground-repeat:no-repeat;\r\n\tbackground-size:cover;\r\n} */\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7R0FPRyIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmJncm5ke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZ1wiKTsgXHJcbmhlaWdodDogNjUwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbn0gKi8iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'EcoDecor';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var angular_image_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-image-slider */ "./node_modules/angular-image-slider/fesm2015/angular-image-slider.js");
/* harmony import */ var _card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./card/card.component */ "./src/app/card/card.component.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/logo/logo.component.ts");
/* harmony import */ var _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./our-story/our-story.component */ "./src/app/our-story/our-story.component.ts");
/* harmony import */ var _flip_cards_flip_cards_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./flip-cards/flip-cards.component */ "./src/app/flip-cards/flip-cards.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _bath_bath_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./bath/bath.component */ "./src/app/bath/bath.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/product.service */ "./src/app/services/product.service.ts");
/* harmony import */ var _furniture_furniture_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./furniture/furniture.component */ "./src/app/furniture/furniture.component.ts");
/* harmony import */ var _bedding_bedding_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./bedding/bedding.component */ "./src/app/bedding/bedding.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
















// import { ProductItemComponent } from './product-item/product-item.component';









//import { CartItemComponent } from './cart/cart-item/cart-item.component';
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
            _logo_logo_component__WEBPACK_IMPORTED_MODULE_9__["LogoComponent"],
            _card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"],
            _our_story_our_story_component__WEBPACK_IMPORTED_MODULE_10__["OurStoryComponent"],
            _flip_cards_flip_cards_component__WEBPACK_IMPORTED_MODULE_11__["FlipCardsComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
            _bath_bath_component__WEBPACK_IMPORTED_MODULE_13__["BathComponent"],
            _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__["HomepageComponent"],
            // ProductItemComponent,
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_16__["CartComponent"],
            _furniture_furniture_component__WEBPACK_IMPORTED_MODULE_18__["FurnitureComponent"],
            _bedding_bedding_component__WEBPACK_IMPORTED_MODULE_19__["BeddingComponent"],
            _signup_signup_component__WEBPACK_IMPORTED_MODULE_20__["SignupComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatExpansionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_22__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            angular_image_slider__WEBPACK_IMPORTED_MODULE_7__["SliderModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"].forRoot([
                { path: '', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__["HomepageComponent"] },
                { path: 'bath', component: _bath_bath_component__WEBPACK_IMPORTED_MODULE_13__["BathComponent"] },
                { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_16__["CartComponent"] },
                { path: 'furniture', component: _furniture_furniture_component__WEBPACK_IMPORTED_MODULE_18__["FurnitureComponent"] },
                { path: 'bedding', component: _bedding_bedding_component__WEBPACK_IMPORTED_MODULE_19__["BeddingComponent"] },
                { path: 'signup', component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_20__["SignupComponent"] },
                { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_21__["LoginComponent"] }
            ])
        ],
        providers: [_services_product_service__WEBPACK_IMPORTED_MODULE_17__["ProductService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/bath/bath.component.css":
/*!*****************************************!*\
  !*** ./src/app/bath/bath.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imageBox {\r\n    position: relative;\r\n    float: left;\r\n  }\r\n  .bg{\r\n    background-color: #f2f0f1;\r\n  }\r\n  .hoverImg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    display: none;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: 0.5s;\r\n            transition-duration: 0.5s;\r\n    -webkit-transition-timing-function: ease;\r\n            transition-timing-function: ease;\r\n    -webkit-transition-delay: 0s;\r\n            transition-delay: 0s;\r\n   \r\n  }\r\n  .imageInn\r\n  {\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: 50s;\r\n            transition-duration: 50s;\r\n    -webkit-transition-timing-function: ease;\r\n            transition-timing-function: ease;\r\n    -webkit-transition-delay: 0s;\r\n            transition-delay: 0s;\r\n  }\r\n  .imageBox:hover .hoverImg {\r\n    display: block;\r\n    -webkit-transition-delay: 10s;\r\n            transition-delay: 10s;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: 50s;\r\n            transition-duration: 50s;\r\n    -webkit-transition-timing-function: ease;\r\n            transition-timing-function: ease;\r\n    transition-delay: 10s;\r\n  }\r\n  * {\r\n    box-sizing: border-box;\r\n  }\r\n  .row {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin-left: 65px; \r\n     margin-right: 10px;\r\n  }\r\n  /* Create three equal columns that sits next to each other */\r\n  .column {\r\n    -webkit-box-flex: 33.33%;\r\n            flex: 33.33%;\r\n    padding: 5px;\r\n  }\r\n  .button {\r\n    display: inline-block;\r\n    border-radius: 4px;\r\n    background-color: #272423;\r\n    border: none;\r\n    color: #FFFFFF;\r\n    text-align: center;\r\n    font-size: 15px;\r\n     /* padding: 20px;  */\r\n    width: 150px;\r\n    height:50px;\r\n    -webkit-transition: all 0.5s;\r\n    transition: all 0.5s;\r\n    cursor: pointer;\r\n    margin: 5px;\r\n    margin-left: 20px;\r\n    margin-top:50px;\r\n  }\r\n  .button span {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    position: relative;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  .button span:after {\r\n    content: '\\00bb';\r\n    position: absolute;\r\n    opacity: 0;\r\n    top: 0;\r\n    right: -20px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  .button:hover span {\r\n    padding-right: 25px;\r\n  }\r\n  .button:hover span:after {\r\n    opacity: 1;\r\n    right: 0;\r\n  }\r\n  .p1\r\n  {\r\n    margin-top: -40px;\r\n    /* font-family: Bahnschrift SemiBold; */\r\n  }\r\n  .p2\r\n  {\r\n    margin-top: -60px;\r\n    font-family: Bahnschrift SemiBold;\r\n  }\r\n  .p3\r\n  {\r\n    margin-top: -15px;\r\n    /* font-family: Bahnschrift SemiBold; */\r\n  }\r\n  .p4\r\n  {\r\n    font-family: Bahnschrift SemiBold;\r\n  }\r\n  .p6\r\n  {\r\n    margin-left: 70px; \r\n    font-family: Tw Cen MT;\r\n    font-size: 30px;\r\n    color: #4e4a4a;\r\n  }\r\n  a:link {\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  /* visited link */\r\n  a:visited {\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  /* mouse over link */\r\n  a:hover {\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  /* selected link */\r\n  a:active {\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmF0aC9iYXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQztJQUNDLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWE7SUFDYixvQ0FBNEI7SUFBNUIsNEJBQTRCO0lBQzVCLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyw0QkFBb0I7WUFBcEIsb0JBQW9COztFQUV0QjtFQUNBOztJQUVFLG9DQUE0QjtJQUE1Qiw0QkFBNEI7SUFDNUIsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qix3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLDRCQUFvQjtZQUFwQixvQkFBb0I7RUFDdEI7RUFFQTtJQUNFLGNBQWM7SUFDZCw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLG9DQUE0QjtJQUE1Qiw0QkFBNEI7SUFDNUIsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qix3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBRUE7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYixpQkFBaUI7S0FDaEIsa0JBQWtCO0VBQ3JCO0VBRUEsNERBQTREO0VBQzVEO0lBQ0Usd0JBQVk7WUFBWixZQUFZO0lBQ1osWUFBWTtFQUNkO0VBR0E7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0tBQ2Qsb0JBQW9CO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCO0VBRUE7SUFDRSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixNQUFNO0lBQ04sWUFBWTtJQUNaLHdCQUFnQjtJQUFoQixnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0UsVUFBVTtJQUNWLFFBQVE7RUFDVjtFQUNBOztJQUVFLGlCQUFpQjtJQUNqQix1Q0FBdUM7RUFDekM7RUFDQTs7SUFFRSxpQkFBaUI7SUFDakIsaUNBQWlDO0VBQ25DO0VBQ0E7O0lBRUUsaUJBQWlCO0lBQ2pCLHVDQUF1QztFQUN6QztFQUNBOztJQUVFLGlDQUFpQztFQUNuQztFQUNBOztJQUVFLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7RUFFQSxpQkFBaUI7RUFDakI7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCO0VBRUEsb0JBQW9CO0VBQ3BCO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtFQUN2QjtFQUVBLGtCQUFrQjtFQUNsQjtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkIiLCJmaWxlIjoic3JjL2FwcC9iYXRoL2JhdGguY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZUJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgLmJne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjBmMTtcclxuICB9XHJcbiAgIC5ob3ZlckltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuICAgXHJcbiAgfVxyXG4gIC5pbWFnZUlublxyXG4gIHtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MHM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2VCb3g6aG92ZXIgLmhvdmVySW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMTBzO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwcztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMTBzO1xyXG4gIH1cclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2NXB4OyBcclxuICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENyZWF0ZSB0aHJlZSBlcXVhbCBjb2x1bW5zIHRoYXQgc2l0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuICAuY29sdW1uIHtcclxuICAgIGZsZXg6IDMzLjMzJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG5cclxuICAuYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI0MjM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAvKiBwYWRkaW5nOiAyMHB4OyAgKi9cclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDo1MHB4O1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uIHNwYW4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbiBzcGFuOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICdcXDAwYmInO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAtMjBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b246aG92ZXIgc3BhbiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uOmhvdmVyIHNwYW46YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICAucDFcclxuICB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgIC8qIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdCBTZW1pQm9sZDsgKi9cclxuICB9XHJcbiAgLnAyXHJcbiAge1xyXG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgICBmb250LWZhbWlseTogQmFobnNjaHJpZnQgU2VtaUJvbGQ7XHJcbiAgfVxyXG4gIC5wM1xyXG4gIHtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gICAgLyogZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0IFNlbWlCb2xkOyAqL1xyXG4gIH1cclxuICAucDRcclxuICB7XHJcbiAgICBmb250LWZhbWlseTogQmFobnNjaHJpZnQgU2VtaUJvbGQ7XHJcbiAgfVxyXG4gIC5wNlxyXG4gIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MHB4OyBcclxuICAgIGZvbnQtZmFtaWx5OiBUdyBDZW4gTVQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzRlNGE0YTtcclxuICB9XHJcbiAgYTpsaW5rIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogdmlzaXRlZCBsaW5rICovXHJcbiAgYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogbW91c2Ugb3ZlciBsaW5rICovXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIHNlbGVjdGVkIGxpbmsgKi9cclxuICBhOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/bath/bath.component.ts":
/*!****************************************!*\
  !*** ./src/app/bath/bath.component.ts ***!
  \****************************************/
/*! exports provided: BathComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BathComponent", function() { return BathComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");



let BathComponent = class BathComponent {
    constructor(productService) {
        this.productService = productService;
    }
    ngOnInit() {
        this.products = this.productService.findAll();
    }
};
BathComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
BathComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bath',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bath.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bath/bath.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bath.component.css */ "./src/app/bath/bath.component.css")).default]
    })
], BathComponent);



/***/ }),

/***/ "./src/app/bedding/bedding.component.css":
/*!***********************************************!*\
  !*** ./src/app/bedding/bedding.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imageBox {\r\n    position: relative;\r\n    float: left;\r\n  }\r\n  .bg{\r\n    background-color: #f2f0f1;\r\n  }\r\n  .hoverImg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    display: none;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: 0.5s;\r\n            transition-duration: 0.5s;\r\n    -webkit-transition-timing-function: ease;\r\n            transition-timing-function: ease;\r\n    -webkit-transition-delay: 0s;\r\n            transition-delay: 0s;\r\n   \r\n  }\r\n  .imageInn\r\n  {\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: 50s;\r\n            transition-duration: 50s;\r\n    -webkit-transition-timing-function: ease;\r\n            transition-timing-function: ease;\r\n    -webkit-transition-delay: 0s;\r\n            transition-delay: 0s;\r\n  }\r\n  .imageBox:hover .hoverImg {\r\n    display: block;\r\n    -webkit-transition-delay: 10s;\r\n            transition-delay: 10s;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: 50s;\r\n            transition-duration: 50s;\r\n    -webkit-transition-timing-function: ease;\r\n            transition-timing-function: ease;\r\n    transition-delay: 10s;\r\n  }\r\n  * {\r\n    box-sizing: border-box;\r\n  }\r\n  .row {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin-left: 65px; \r\n     margin-right: 10px;\r\n  }\r\n  /* Create three equal columns that sits next to each other */\r\n  .column {\r\n    -webkit-box-flex: 33.33%;\r\n            flex: 33.33%;\r\n    padding: 5px;\r\n  }\r\n  .button {\r\n    display: inline-block;\r\n    border-radius: 4px;\r\n    background-color: #272423;\r\n    border: none;\r\n    color: #FFFFFF;\r\n    text-align: center;\r\n    font-size: 15px;\r\n     /* padding: 20px;  */\r\n    width: 150px;\r\n    height:50px;\r\n    -webkit-transition: all 0.5s;\r\n    transition: all 0.5s;\r\n    cursor: pointer;\r\n    margin: 5px;\r\n    margin-left: 20px;\r\n    margin-top:50px;\r\n  }\r\n  .button span {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    position: relative;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  .button span:after {\r\n    content: '\\00bb';\r\n    position: absolute;\r\n    opacity: 0;\r\n    top: 0;\r\n    right: -20px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  .button:hover span {\r\n    padding-right: 25px;\r\n  }\r\n  .button:hover span:after {\r\n    opacity: 1;\r\n    right: 0;\r\n  }\r\n  .p1\r\n  {\r\n    margin-top: -40px;\r\n    /* font-family: Bahnschrift SemiBold; */\r\n  }\r\n  .p2\r\n  {\r\n    margin-top: -60px;\r\n    font-family: Bahnschrift SemiBold;\r\n  }\r\n  .p3\r\n  {\r\n    margin-top: -15px;\r\n    /* font-family: Bahnschrift SemiBold; */\r\n  }\r\n  .p4\r\n  {\r\n    font-family: Bahnschrift SemiBold;\r\n  }\r\n  .p6\r\n  {\r\n    margin-left: 70px; \r\n    font-family: Tw Cen MT;\r\n    font-size: 30px;\r\n    color: #4e4a4a;\r\n  }\r\n  a:link {\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  /* visited link */\r\n  a:visited {\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  /* mouse over link */\r\n  a:hover {\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  /* selected link */\r\n  a:active {\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmVkZGluZy9iZWRkaW5nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztFQUNiO0VBQ0E7SUFDRSx5QkFBeUI7RUFDM0I7RUFDQztJQUNDLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLGFBQWE7SUFDYixvQ0FBNEI7SUFBNUIsNEJBQTRCO0lBQzVCLGlDQUF5QjtZQUF6Qix5QkFBeUI7SUFDekIsd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyw0QkFBb0I7WUFBcEIsb0JBQW9COztFQUV0QjtFQUNBOztJQUVFLG9DQUE0QjtJQUE1Qiw0QkFBNEI7SUFDNUIsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qix3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLDRCQUFvQjtZQUFwQixvQkFBb0I7RUFDdEI7RUFFQTtJQUNFLGNBQWM7SUFDZCw2QkFBcUI7WUFBckIscUJBQXFCO0lBQ3JCLG9DQUE0QjtJQUE1Qiw0QkFBNEI7SUFDNUIsZ0NBQXdCO1lBQXhCLHdCQUF3QjtJQUN4Qix3Q0FBZ0M7WUFBaEMsZ0NBQWdDO0lBQ2hDLHFCQUFxQjtFQUN2QjtFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBRUE7SUFDRSxvQkFBYTtJQUFiLGFBQWE7SUFDYixpQkFBaUI7S0FDaEIsa0JBQWtCO0VBQ3JCO0VBRUEsNERBQTREO0VBQzVEO0lBQ0Usd0JBQVk7WUFBWixZQUFZO0lBQ1osWUFBWTtFQUNkO0VBR0E7SUFDRSxxQkFBcUI7SUFDckIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osY0FBYztJQUNkLGtCQUFrQjtJQUNsQixlQUFlO0tBQ2Qsb0JBQW9CO0lBQ3JCLFlBQVk7SUFDWixXQUFXO0lBQ1gsNEJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQixlQUFlO0lBQ2YsV0FBVztJQUNYLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCO0VBRUE7SUFDRSxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixNQUFNO0lBQ04sWUFBWTtJQUNaLHdCQUFnQjtJQUFoQixnQkFBZ0I7RUFDbEI7RUFFQTtJQUNFLG1CQUFtQjtFQUNyQjtFQUVBO0lBQ0UsVUFBVTtJQUNWLFFBQVE7RUFDVjtFQUNBOztJQUVFLGlCQUFpQjtJQUNqQix1Q0FBdUM7RUFDekM7RUFDQTs7SUFFRSxpQkFBaUI7SUFDakIsaUNBQWlDO0VBQ25DO0VBQ0E7O0lBRUUsaUJBQWlCO0lBQ2pCLHVDQUF1QztFQUN6QztFQUNBOztJQUVFLGlDQUFpQztFQUNuQztFQUNBOztJQUVFLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEIsZUFBZTtJQUNmLGNBQWM7RUFDaEI7RUFDQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7RUFFQSxpQkFBaUI7RUFDakI7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCO0VBRUEsb0JBQW9CO0VBQ3BCO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtFQUN2QjtFQUVBLGtCQUFrQjtFQUNsQjtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkIiLCJmaWxlIjoic3JjL2FwcC9iZWRkaW5nL2JlZGRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZUJveCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcbiAgLmJne1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjBmMTtcclxuICB9XHJcbiAgIC5ob3ZlckltZyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjVzO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAwcztcclxuICAgXHJcbiAgfVxyXG4gIC5pbWFnZUlublxyXG4gIHtcclxuICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IG9wYWNpdHk7XHJcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA1MHM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gIH1cclxuICBcclxuICAuaW1hZ2VCb3g6aG92ZXIgLmhvdmVySW1nIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMTBzO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwcztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMTBzO1xyXG4gIH1cclxuICAqIHtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIFxyXG4gIC5yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIG1hcmdpbi1sZWZ0OiA2NXB4OyBcclxuICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIENyZWF0ZSB0aHJlZSBlcXVhbCBjb2x1bW5zIHRoYXQgc2l0cyBuZXh0IHRvIGVhY2ggb3RoZXIgKi9cclxuICAuY29sdW1uIHtcclxuICAgIGZsZXg6IDMzLjMzJTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICB9XHJcblxyXG5cclxuICAuYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyNzI0MjM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICAgICAvKiBwYWRkaW5nOiAyMHB4OyAgKi9cclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDo1MHB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gICAgbWFyZ2luLXRvcDo1MHB4O1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uIHNwYW4ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbiBzcGFuOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6ICdcXDAwYmInO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHJpZ2h0OiAtMjBweDtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b246aG92ZXIgc3BhbiB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uOmhvdmVyIHNwYW46YWZ0ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICAucDFcclxuICB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNDBweDtcclxuICAgIC8qIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdCBTZW1pQm9sZDsgKi9cclxuICB9XHJcbiAgLnAyXHJcbiAge1xyXG4gICAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgICBmb250LWZhbWlseTogQmFobnNjaHJpZnQgU2VtaUJvbGQ7XHJcbiAgfVxyXG4gIC5wM1xyXG4gIHtcclxuICAgIG1hcmdpbi10b3A6IC0xNXB4O1xyXG4gICAgLyogZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0IFNlbWlCb2xkOyAqL1xyXG4gIH1cclxuICAucDRcclxuICB7XHJcbiAgICBmb250LWZhbWlseTogQmFobnNjaHJpZnQgU2VtaUJvbGQ7XHJcbiAgfVxyXG4gIC5wNlxyXG4gIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA3MHB4OyBcclxuICAgIGZvbnQtZmFtaWx5OiBUdyBDZW4gTVQ7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICBjb2xvcjogIzRlNGE0YTtcclxuICB9XHJcbiAgYTpsaW5rIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogdmlzaXRlZCBsaW5rICovXHJcbiAgYTp2aXNpdGVkIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogbW91c2Ugb3ZlciBsaW5rICovXHJcbiAgYTpob3ZlciB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIHNlbGVjdGVkIGxpbmsgKi9cclxuICBhOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/bedding/bedding.component.ts":
/*!**********************************************!*\
  !*** ./src/app/bedding/bedding.component.ts ***!
  \**********************************************/
/*! exports provided: BeddingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeddingComponent", function() { return BeddingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");



let BeddingComponent = class BeddingComponent {
    constructor(productService) {
        this.productService = productService;
    }
    ngOnInit() {
        this.products = this.productService.findAll();
    }
};
BeddingComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
BeddingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-bedding',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./bedding.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/bedding/bedding.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./bedding.component.css */ "./src/app/bedding/bedding.component.css")).default]
    })
], BeddingComponent);



/***/ }),

/***/ "./src/app/card/card.component.css":
/*!*****************************************!*\
  !*** ./src/app/card/card.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  /* Float four columns side by side */\r\n\r\n  .column {\r\n    float: left;\r\n    width: 33.33%;\r\n    padding: 0 10px;\r\n  }\r\n\r\n  /* Remove extra left and right margins, due to padding */\r\n\r\n  .row {margin: 0 -5px;}\r\n\r\n  /* Clear floats after the columns */\r\n\r\n  .row:after {\r\n    content: \"\";\r\n    display: table;\r\n    clear: both;\r\n  }\r\n\r\n  /* Responsive columns */\r\n\r\n  @media screen and (max-width: 600px) {\r\n    .column {\r\n      width: 100%;\r\n      display: block;\r\n      margin-bottom: 20px;\r\n    }\r\n  }\r\n\r\n  /* Style the counter cards */\r\n\r\n  .card {\r\n    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\r\n    padding: 16px;\r\n    text-align: center;\r\n    background-color: #ced2d3;\r\n    opacity: 75%;\r\n  }\r\n\r\n  .card:hover{\r\n    opacity: 100%;\r\n  }\r\n\r\n  .card .btn {\r\n    position: absolute;\r\n    top: 85%;\r\n    left: 50%;\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n    -ms-transform: translate(-50%, -50%);\r\n    background-color: white ;\r\n    color:#555;\r\n    font-size: 16px;\r\n    padding: 12px 24px;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 5px;\r\n    text-align: center;\r\n  }\r\n\r\n  .card .btn:hover{\r\n    opacity: 75%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxzQkFBc0I7RUFDeEI7O0VBRUEsb0NBQW9DOztFQUNwQztJQUNFLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtFQUNqQjs7RUFFQSx3REFBd0Q7O0VBQ3hELE1BQU0sY0FBYyxDQUFDOztFQUVyQixtQ0FBbUM7O0VBQ25DO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxXQUFXO0VBQ2I7O0VBRUEsdUJBQXVCOztFQUN2QjtJQUNFO01BQ0UsV0FBVztNQUNYLGNBQWM7TUFDZCxtQkFBbUI7SUFDckI7RUFDRjs7RUFFQSw0QkFBNEI7O0VBQzVCO0lBQ0UsMENBQTBDO0lBQzFDLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFlBQVk7RUFDZDs7RUFDQTtJQUNFLGFBQWE7RUFDZjs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLHdCQUF3QjtJQUN4QixVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrQkFBa0I7RUFDcEI7O0VBQ0E7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9jYXJkL2NhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gIC8qIEZsb2F0IGZvdXIgY29sdW1ucyBzaWRlIGJ5IHNpZGUgKi9cclxuICAuY29sdW1uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDMzLjMzJTtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogUmVtb3ZlIGV4dHJhIGxlZnQgYW5kIHJpZ2h0IG1hcmdpbnMsIGR1ZSB0byBwYWRkaW5nICovXHJcbiAgLnJvdyB7bWFyZ2luOiAwIC01cHg7fVxyXG4gIFxyXG4gIC8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4gIC5yb3c6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFJlc3BvbnNpdmUgY29sdW1ucyAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY29sdW1uIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAvKiBTdHlsZSB0aGUgY291bnRlciBjYXJkcyAqL1xyXG4gIC5jYXJkIHtcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHBhZGRpbmc6IDE2cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VkMmQzO1xyXG4gICAgb3BhY2l0eTogNzUlO1xyXG4gIH1cclxuICAuY2FyZDpob3ZlcntcclxuICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgfVxyXG4gIC5jYXJkIC5idG4ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA4NSU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlIDtcclxuICAgIGNvbG9yOiM1NTU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDI0cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIC5jYXJkIC5idG46aG92ZXJ7XHJcbiAgICBvcGFjaXR5OiA3NSU7XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/card/card.component.ts":
/*!****************************************!*\
  !*** ./src/app/card/card.component.ts ***!
  \****************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let CardComponent = class CardComponent {
    constructor() { }
    ngOnInit() {
    }
};
CardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-card',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/card/card.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./card.component.css */ "./src/app/card/card.component.css")).default]
    })
], CardComponent);



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bg{\r\n    background-color: #f2f0f1;\r\n}\r\ntable, td{\r\n    font-family: \"Maiandra GD\";\r\n    font-size: 14px;\r\n}\r\ntable, th{\r\n    font-size: 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLDBCQUEwQjtJQUMxQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMGYxO1xyXG59XHJcbnRhYmxlLCB0ZHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk1haWFuZHJhIEdEXCI7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxudGFibGUsIHRoe1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _services_product_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/product.service */ "./src/app/services/product.service.ts");




let CartComponent = class CartComponent {
    constructor(activatedRoute, productService) {
        this.activatedRoute = activatedRoute;
        this.productService = productService;
        // private items: Item[] = [];
        this.items = [];
        this.total = 0;
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            var id = params['id'];
            if (id) {
                var item = {
                    product: this.productService.find(id),
                    quantity: 1
                };
                if (localStorage.getItem('cart') == null) {
                    let cart = [];
                    cart.push(JSON.stringify(item));
                    localStorage.setItem('cart', JSON.stringify(cart));
                }
                else {
                    let cart = JSON.parse(localStorage.getItem('cart'));
                    let index = -1;
                    for (var i = 0; i < cart.length; i++) {
                        let item = JSON.parse(cart[i]);
                        if (item.product.id == id) {
                            index = i;
                            break;
                        }
                    }
                    if (index == -1) {
                        cart.push(JSON.stringify(item));
                        localStorage.setItem('cart', JSON.stringify(cart));
                    }
                    else {
                        let item = JSON.parse(cart[index]);
                        item.quantity += 1;
                        cart[index] = JSON.stringify(item);
                        localStorage.setItem("cart", JSON.stringify(cart));
                    }
                }
                this.loadCart();
            }
            else {
                this.loadCart();
            }
        });
    }
    loadCart() {
        this.total = 0;
        this.items = [];
        let cart = JSON.parse(localStorage.getItem('cart'));
        for (var i = 0; i < cart.length; i++) {
            let item = JSON.parse(cart[i]);
            this.items.push({
                product: item.product,
                quantity: item.quantity
            });
            this.total += item.product.price * item.quantity;
        }
    }
    remove(id) {
        let cart = JSON.parse(localStorage.getItem('cart'));
        let index = -1;
        for (var i = 0; i < cart.length; i++) {
            let item = JSON.parse(cart[i]);
            if (item.product.id == id) {
                cart.splice(i, 1);
                break;
            }
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        this.loadCart();
    }
};
CartComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _services_product_service__WEBPACK_IMPORTED_MODULE_3__["ProductService"] }
];
CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")).default]
    })
], CartComponent);



/***/ }),

/***/ "./src/app/flip-cards/flip-cards.component.css":
/*!*****************************************************!*\
  !*** ./src/app/flip-cards/flip-cards.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".flip-card {\r\n    background-color: transparent;\r\n    width: 200px;\r\n    height: 400px;\r\n    -webkit-perspective: 1000px;\r\n            perspective: 1000px;\r\n  }\r\n  \r\n  .flip-card-inner {\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    text-align: center;\r\n    -webkit-transition: -webkit-transform 0.6s;\r\n    transition: -webkit-transform 0.6s;\r\n    transition: transform 0.6s;\r\n    transition: transform 0.6s, -webkit-transform 0.6s;\r\n    -webkit-transform-style: preserve-3d;\r\n            transform-style: preserve-3d;\r\n    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);\r\n  }\r\n  \r\n  .flip-card:hover .flip-card-inner {\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n  }\r\n  \r\n  .flip-card-front, .flip-card-back {\r\n    position: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    -webkit-backface-visibility: hidden;\r\n    backface-visibility: hidden;\r\n  }\r\n  \r\n  .flip-card-front {\r\n    background-color: #bbb;\r\n    color: black;\r\n  }\r\n  \r\n  .flip-card-back {\r\n    background-color: #c43a2f;\r\n    color: white;\r\n    -webkit-transform: rotateY(180deg);\r\n            transform: rotateY(180deg);\r\n    /* vertical-align: middle; */\r\n    \r\n  }\r\n  \r\n  .row {margin: 0 -5px;}\r\n  \r\n  /* Clear floats after the columns */\r\n  \r\n  .row:after {\r\n  content: \"\";\r\n  display: table;\r\n  clear: both;\r\n  \r\n}\r\n  \r\n  p{\r\n  font-family: \"Maiandra GD\";\r\n  \r\n  /* margin-top: 30px; */\r\n  text-align: center;\r\n  padding:10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmxpcC1jYXJkcy9mbGlwLWNhcmRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGFBQWE7SUFDYiwyQkFBbUI7WUFBbkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLDBDQUEwQjtJQUExQixrQ0FBMEI7SUFBMUIsMEJBQTBCO0lBQTFCLGtEQUEwQjtJQUMxQixvQ0FBNEI7WUFBNUIsNEJBQTRCO0lBQzVCLHVDQUF1QztFQUN6Qzs7RUFFQTtJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7RUFDNUI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMsMkJBQTJCO0VBQzdCOztFQUVBO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osa0NBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQiw0QkFBNEI7O0VBRTlCOztFQUNBLE1BQU0sY0FBYyxDQUFDOztFQUV2QixtQ0FBbUM7O0VBQ25DO0VBQ0UsV0FBVztFQUNYLGNBQWM7RUFDZCxXQUFXOztBQUViOztFQUNBO0VBQ0UsMEJBQTBCOztFQUUxQixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2ZsaXAtY2FyZHMvZmxpcC1jYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsaXAtY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogNDAwcHg7XHJcbiAgICBwZXJzcGVjdGl2ZTogMTAwMHB4O1xyXG4gIH1cclxuICBcclxuICAuZmxpcC1jYXJkLWlubmVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnM7XHJcbiAgICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIH1cclxuICBcclxuICAuZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtaW5uZXIge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGlwLWNhcmQtZnJvbnQsIC5mbGlwLWNhcmQtYmFjayB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAuZmxpcC1jYXJkLWZyb250IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiYmI7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5mbGlwLWNhcmQtYmFjayB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYzQzYTJmO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgICAvKiB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAqL1xyXG4gICAgXHJcbiAgfVxyXG4gIC5yb3cge21hcmdpbjogMCAtNXB4O31cclxuXHJcbi8qIENsZWFyIGZsb2F0cyBhZnRlciB0aGUgY29sdW1ucyAqL1xyXG4ucm93OmFmdGVyIHtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IHRhYmxlO1xyXG4gIGNsZWFyOiBib3RoO1xyXG4gIFxyXG59XHJcbnB7XHJcbiAgZm9udC1mYW1pbHk6IFwiTWFpYW5kcmEgR0RcIjtcclxuICBcclxuICAvKiBtYXJnaW4tdG9wOiAzMHB4OyAqL1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOjEwcHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/flip-cards/flip-cards.component.ts":
/*!****************************************************!*\
  !*** ./src/app/flip-cards/flip-cards.component.ts ***!
  \****************************************************/
/*! exports provided: FlipCardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipCardsComponent", function() { return FlipCardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FlipCardsComponent = class FlipCardsComponent {
    constructor() { }
    ngOnInit() {
    }
};
FlipCardsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-flip-cards',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./flip-cards.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/flip-cards/flip-cards.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./flip-cards.component.css */ "./src/app/flip-cards/flip-cards.component.css")).default]
    })
], FlipCardsComponent);



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css');\r\nsection {\r\n    padding: 60px 0;\r\n}\r\nsection .section-title {\r\n    text-align: center;\r\n    color: black;\r\n    /* margin-bottom: 50px; */\r\n    text-transform: uppercase;\r\n}\r\n#footer {\r\n    background: #ced2d3 !important;\r\n}\r\n#footer h5{\r\n\tpadding-left: 10px;\r\n    border-left: 3px solid black;\r\n    padding-bottom: 6px;\r\n    margin-bottom: 20px;\r\n    color:black;\r\n}\r\n#footer a {\r\n    color: black;\r\n    text-decoration: none !important;\r\n    background-color: transparent;\r\n    -webkit-text-decoration-skip: objects;\r\n}\r\n#footer ul.social li{\r\n\tpadding: 3px 0;\r\n}\r\n#footer ul.social li a i {\r\n    margin-right: 5px;\r\n\tfont-size:25px;\r\n\t-webkit-transition: .5s all ease;\r\n\ttransition: .5s all ease;\r\n}\r\n#footer ul.social li:hover a i {\r\n\tfont-size:30px;\r\n\tmargin-top:-10px;\r\n}\r\n#footer ul.social li a,\r\n#footer ul.quick-links li a{\r\n\tcolor:black;\r\n}\r\n#footer ul.social li a:hover{\r\n\tcolor:black;\r\n}\r\n#footer ul.quick-links li{\r\n\tpadding: 3px 0;\r\n\t-webkit-transition: .5s all ease;\r\n\ttransition: .5s all ease;\r\n}\r\n#footer ul.quick-links li:hover{\r\n\tpadding: 3px 0;\r\n\tmargin-left:5px;\r\n\tfont-weight:700;\r\n}\r\n#footer ul.quick-links li a i{\r\n\tmargin-right: 5px;\r\n}\r\n#footer ul.quick-links li:hover a i {\r\n    font-weight: 700;\r\n}\r\n@media (max-width:767px){\r\n\t#footer h5 {\r\n    padding-left: 0;\r\n    border-left: transparent;\r\n    padding-bottom: 0px;\r\n    margin-bottom: 10px;\r\n    color: black;\r\n}\r\n}\r\n.block {\r\n    display: block;\r\n    width: 100%;\r\n    border: none;\r\n    background-color: #625e5d;\r\n    color: white;\r\n    padding: 14px 28px;\r\n    font-size: 16px;\r\n    cursor: pointer;\r\n    text-align: center;\r\n    -webkit-margin-before: -59px;\r\n            margin-block-start: -59px;\r\n    margin-bottom: 30px;\r\n  }\r\n.block:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBGQUEwRjtBQUMxRjtJQUNJLGVBQWU7QUFDbkI7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksOEJBQThCO0FBQ2xDO0FBQ0E7Q0FDQyxrQkFBa0I7SUFDZiw0QkFBNEI7SUFDNUIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLFlBQVk7SUFDWixnQ0FBZ0M7SUFDaEMsNkJBQTZCO0lBQzdCLHFDQUFxQztBQUN6QztBQUNBO0NBQ0MsY0FBYztBQUNmO0FBQ0E7SUFDSSxpQkFBaUI7Q0FDcEIsY0FBYztDQUNkLGdDQUFnQztDQUVoQyx3QkFBd0I7QUFDekI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakI7QUFDQTs7Q0FFQyxXQUFXO0FBQ1o7QUFDQTtDQUNDLFdBQVc7QUFDWjtBQUNBO0NBQ0MsY0FBYztDQUNkLGdDQUFnQztDQUVoQyx3QkFBd0I7QUFDekI7QUFDQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsZUFBZTtBQUNoQjtBQUNBO0NBQ0MsaUJBQWlCO0FBQ2xCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtDQUNDO0lBQ0csZUFBZTtJQUNmLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1oseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsNEJBQXlCO1lBQXpCLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9tYXhjZG4uYm9vdHN0cmFwY2RuLmNvbS9mb250LWF3ZXNvbWUvNC43LjAvY3NzL2ZvbnQtYXdlc29tZS5taW4uY3NzJyk7XHJcbnNlY3Rpb24ge1xyXG4gICAgcGFkZGluZzogNjBweCAwO1xyXG59XHJcblxyXG5zZWN0aW9uIC5zZWN0aW9uLXRpdGxlIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIC8qIG1hcmdpbi1ib3R0b206IDUwcHg7ICovXHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiNmb290ZXIge1xyXG4gICAgYmFja2dyb3VuZDogI2NlZDJkMyAhaW1wb3J0YW50O1xyXG59XHJcbiNmb290ZXIgaDV7XHJcblx0cGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmctYm90dG9tOiA2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuI2Zvb3RlciBhIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzO1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpe1xyXG5cdHBhZGRpbmc6IDNweCAwO1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpIGEgaSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuXHRmb250LXNpemU6MjVweDtcclxuXHQtd2Via2l0LXRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxuXHQtbW96LXRyYW5zaXRpb246IC41cyBhbGwgZWFzZTtcclxuXHR0cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XHJcbn1cclxuI2Zvb3RlciB1bC5zb2NpYWwgbGk6aG92ZXIgYSBpIHtcclxuXHRmb250LXNpemU6MzBweDtcclxuXHRtYXJnaW4tdG9wOi0xMHB4O1xyXG59XHJcbiNmb290ZXIgdWwuc29jaWFsIGxpIGEsXHJcbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGkgYXtcclxuXHRjb2xvcjpibGFjaztcclxufVxyXG4jZm9vdGVyIHVsLnNvY2lhbCBsaSBhOmhvdmVye1xyXG5cdGNvbG9yOmJsYWNrO1xyXG59XHJcbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGl7XHJcblx0cGFkZGluZzogM3B4IDA7XHJcblx0LXdlYmtpdC10cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XHJcblx0LW1vei10cmFuc2l0aW9uOiAuNXMgYWxsIGVhc2U7XHJcblx0dHJhbnNpdGlvbjogLjVzIGFsbCBlYXNlO1xyXG59XHJcbiNmb290ZXIgdWwucXVpY2stbGlua3MgbGk6aG92ZXJ7XHJcblx0cGFkZGluZzogM3B4IDA7XHJcblx0bWFyZ2luLWxlZnQ6NXB4O1xyXG5cdGZvbnQtd2VpZ2h0OjcwMDtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpIGEgaXtcclxuXHRtYXJnaW4tcmlnaHQ6IDVweDtcclxufVxyXG4jZm9vdGVyIHVsLnF1aWNrLWxpbmtzIGxpOmhvdmVyIGEgaSB7XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDo3NjdweCl7XHJcblx0I2Zvb3RlciBoNSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XHJcbiAgICBib3JkZXItbGVmdDogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG59XHJcbi5ibG9jayB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzYyNWU1ZDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDE0cHggMjhweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi1ibG9jay1zdGFydDogLTU5cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICBcclxuICAuYmxvY2s6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RkZDtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/furniture/furniture.component.css":
/*!***************************************************!*\
  !*** ./src/app/furniture/furniture.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".imageBox {\r\n    position: relative;\r\n    float: left;\r\n  }\r\n  .bg{\r\n    background-color: #f2f0f1;\r\n  }\r\n  .hoverImg {\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    display: none;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: 0.5s;\r\n            transition-duration: 0.5s;\r\n    -webkit-transition-timing-function: ease;\r\n            transition-timing-function: ease;\r\n    -webkit-transition-delay: 0s;\r\n            transition-delay: 0s;\r\n   \r\n  }\r\n  .imageInn\r\n  {\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: 50s;\r\n            transition-duration: 50s;\r\n    -webkit-transition-timing-function: ease;\r\n            transition-timing-function: ease;\r\n    -webkit-transition-delay: 0s;\r\n            transition-delay: 0s;\r\n  }\r\n  .imageBox:hover .hoverImg {\r\n    display: block;\r\n    -webkit-transition-delay: 10s;\r\n            transition-delay: 10s;\r\n    -webkit-transition-property: opacity;\r\n    transition-property: opacity;\r\n    -webkit-transition-duration: 50s;\r\n            transition-duration: 50s;\r\n    -webkit-transition-timing-function: ease;\r\n            transition-timing-function: ease;\r\n    transition-delay: 10s;\r\n  }\r\n  * {\r\n    box-sizing: border-box;\r\n  }\r\n  .row {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin-left: 65px; \r\n     margin-right: 10px;\r\n  }\r\n  /* Create three equal columns that sits next to each other */\r\n  .column {\r\n    -webkit-box-flex: 33.33%;\r\n            flex: 33.33%;\r\n    padding: 5px;\r\n  }\r\n  .button {\r\n    display: inline-block;\r\n    border-radius: 4px;\r\n    background-color: #272423;\r\n    border: none;\r\n    color: #FFFFFF;\r\n    text-align: center;\r\n    font-size: 15px;\r\n     /* padding: 20px;  */\r\n    width: 150px;\r\n    height:50px;\r\n    -webkit-transition: all 0.5s;\r\n    transition: all 0.5s;\r\n    cursor: pointer;\r\n    margin: 5px;\r\n    margin-left: 20px;\r\n    margin-top:50px;\r\n  }\r\n  .button span {\r\n    cursor: pointer;\r\n    display: inline-block;\r\n    position: relative;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  .button span:after {\r\n    content: '\\00bb';\r\n    position: absolute;\r\n    opacity: 0;\r\n    top: 0;\r\n    right: -20px;\r\n    -webkit-transition: 0.5s;\r\n    transition: 0.5s;\r\n  }\r\n  .button:hover span {\r\n    padding-right: 25px;\r\n  }\r\n  .button:hover span:after {\r\n    opacity: 1;\r\n    right: 0;\r\n  }\r\n  .p1\r\n  {\r\n    margin-top: -40px;\r\n    /* font-family: Bahnschrift SemiBold; */\r\n  }\r\n  .p2\r\n  {\r\n    margin-top: -60px;\r\n    font-family: Bahnschrift SemiBold;\r\n  }\r\n  .p3\r\n  {\r\n    margin-top: -15px;\r\n    /* font-family: Bahnschrift SemiBold; */\r\n  }\r\n  .p4\r\n  {\r\n    font-family: Bahnschrift SemiBold;\r\n  }\r\n  .p6\r\n  {\r\n    margin-left: 70px; \r\n    font-family: Tw Cen MT;\r\n    font-size: 30px;\r\n    color: #4e4a4a;\r\n  }\r\n  a:link {\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  /* visited link */\r\n  a:visited {\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  /* mouse over link */\r\n  a:hover {\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  /* selected link */\r\n  a:active {\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnVybml0dXJlL2Z1cm5pdHVyZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7RUFDYjtFQUNBO0lBQ0UseUJBQXlCO0VBQzNCO0VBQ0M7SUFDQyxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixhQUFhO0lBQ2Isb0NBQTRCO0lBQTVCLDRCQUE0QjtJQUM1QixpQ0FBeUI7WUFBekIseUJBQXlCO0lBQ3pCLHdDQUFnQztZQUFoQyxnQ0FBZ0M7SUFDaEMsNEJBQW9CO1lBQXBCLG9CQUFvQjs7RUFFdEI7RUFDQTs7SUFFRSxvQ0FBNEI7SUFBNUIsNEJBQTRCO0lBQzVCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyw0QkFBb0I7WUFBcEIsb0JBQW9CO0VBQ3RCO0VBRUE7SUFDRSxjQUFjO0lBQ2QsNkJBQXFCO1lBQXJCLHFCQUFxQjtJQUNyQixvQ0FBNEI7SUFBNUIsNEJBQTRCO0lBQzVCLGdDQUF3QjtZQUF4Qix3QkFBd0I7SUFDeEIsd0NBQWdDO1lBQWhDLGdDQUFnQztJQUNoQyxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IsaUJBQWlCO0tBQ2hCLGtCQUFrQjtFQUNyQjtFQUVBLDREQUE0RDtFQUM1RDtJQUNFLHdCQUFZO1lBQVosWUFBWTtJQUNaLFlBQVk7RUFDZDtFQUdBO0lBQ0UscUJBQXFCO0lBQ3JCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsZUFBZTtLQUNkLG9CQUFvQjtJQUNyQixZQUFZO0lBQ1osV0FBVztJQUNYLDRCQUFvQjtJQUFwQixvQkFBb0I7SUFDcEIsZUFBZTtJQUNmLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjtFQUVBO0lBQ0UsZUFBZTtJQUNmLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsd0JBQWdCO0lBQWhCLGdCQUFnQjtFQUNsQjtFQUVBO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsTUFBTTtJQUNOLFlBQVk7SUFDWix3QkFBZ0I7SUFBaEIsZ0JBQWdCO0VBQ2xCO0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7RUFFQTtJQUNFLFVBQVU7SUFDVixRQUFRO0VBQ1Y7RUFDQTs7SUFFRSxpQkFBaUI7SUFDakIsdUNBQXVDO0VBQ3pDO0VBQ0E7O0lBRUUsaUJBQWlCO0lBQ2pCLGlDQUFpQztFQUNuQztFQUNBOztJQUVFLGlCQUFpQjtJQUNqQix1Q0FBdUM7RUFDekM7RUFDQTs7SUFFRSxpQ0FBaUM7RUFDbkM7RUFDQTs7SUFFRSxpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLGVBQWU7SUFDZixjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCO0VBRUEsaUJBQWlCO0VBQ2pCO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtFQUN2QjtFQUVBLG9CQUFvQjtFQUNwQjtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7RUFFQSxrQkFBa0I7RUFDbEI7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvZnVybml0dXJlL2Z1cm5pdHVyZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlQm94IHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuICAuYmd7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmMGYxO1xyXG4gIH1cclxuICAgLmhvdmVySW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuNXM7XHJcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcclxuICAgIHRyYW5zaXRpb24tZGVsYXk6IDBzO1xyXG4gICBcclxuICB9XHJcbiAgLmltYWdlSW5uXHJcbiAge1xyXG4gICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcclxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDUwcztcclxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xyXG4gICAgdHJhbnNpdGlvbi1kZWxheTogMHM7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbWFnZUJveDpob3ZlciAuaG92ZXJJbWcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxMHM7XHJcbiAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xyXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogNTBzO1xyXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2U7XHJcbiAgICB0cmFuc2l0aW9uLWRlbGF5OiAxMHM7XHJcbiAgfVxyXG4gICoge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcbiAgXHJcbiAgLnJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDY1cHg7IFxyXG4gICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLyogQ3JlYXRlIHRocmVlIGVxdWFsIGNvbHVtbnMgdGhhdCBzaXRzIG5leHQgdG8gZWFjaCBvdGhlciAqL1xyXG4gIC5jb2x1bW4ge1xyXG4gICAgZmxleDogMzMuMzMlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gIH1cclxuXHJcblxyXG4gIC5idXR0b24ge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3MjQyMztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgIC8qIHBhZGRpbmc6IDIwcHg7ICAqL1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgaGVpZ2h0OjUwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOjUwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b24gc3BhbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gIH1cclxuICBcclxuICAuYnV0dG9uIHNwYW46YWZ0ZXIge1xyXG4gICAgY29udGVudDogJ1xcMDBiYic7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IC0yMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogMC41cztcclxuICB9XHJcbiAgXHJcbiAgLmJ1dHRvbjpob3ZlciBzcGFuIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b246aG92ZXIgc3BhbjphZnRlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgfVxyXG4gIC5wMVxyXG4gIHtcclxuICAgIG1hcmdpbi10b3A6IC00MHB4O1xyXG4gICAgLyogZm9udC1mYW1pbHk6IEJhaG5zY2hyaWZ0IFNlbWlCb2xkOyAqL1xyXG4gIH1cclxuICAucDJcclxuICB7XHJcbiAgICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdCBTZW1pQm9sZDtcclxuICB9XHJcbiAgLnAzXHJcbiAge1xyXG4gICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICAvKiBmb250LWZhbWlseTogQmFobnNjaHJpZnQgU2VtaUJvbGQ7ICovXHJcbiAgfVxyXG4gIC5wNFxyXG4gIHtcclxuICAgIGZvbnQtZmFtaWx5OiBCYWhuc2NocmlmdCBTZW1pQm9sZDtcclxuICB9XHJcbiAgLnA2XHJcbiAge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7IFxyXG4gICAgZm9udC1mYW1pbHk6IFR3IENlbiBNVDtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgIGNvbG9yOiAjNGU0YTRhO1xyXG4gIH1cclxuICBhOmxpbmsge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiB2aXNpdGVkIGxpbmsgKi9cclxuICBhOnZpc2l0ZWQge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiBtb3VzZSBvdmVyIGxpbmsgKi9cclxuICBhOmhvdmVyIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgXHJcbiAgLyogc2VsZWN0ZWQgbGluayAqL1xyXG4gIGE6YWN0aXZlIHtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/furniture/furniture.component.ts":
/*!**************************************************!*\
  !*** ./src/app/furniture/furniture.component.ts ***!
  \**************************************************/
/*! exports provided: FurnitureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FurnitureComponent", function() { return FurnitureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/product.service */ "./src/app/services/product.service.ts");



let FurnitureComponent = class FurnitureComponent {
    constructor(productService) {
        this.productService = productService;
    }
    ngOnInit() {
        this.products = this.productService.findAll();
    }
};
FurnitureComponent.ctorParameters = () => [
    { type: src_app_services_product_service__WEBPACK_IMPORTED_MODULE_2__["ProductService"] }
];
FurnitureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-furniture',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./furniture.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/furniture/furniture.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./furniture.component.css */ "./src/app/furniture/furniture.component.css")).default]
    })
], FurnitureComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("table{\r\n    background-color: transparent;\r\n    height: 50px;\r\n    /* position: fixed; */\r\n    /* top: 0; */\r\n      margin-right: 15px;\r\n          z-index: 1;\r\n          width: 100%;\r\n  }\r\n  td{\r\n    width: 200px;\r\n    border-left: 2px solid #c43a2f;\r\n  }\r\n  table ,td{\r\n    text-align: center;\r\n    font-family: \"Maiandra GD\";\r\n  }\r\n  .subnav {\r\n    overflow: hidden;\r\n  }\r\n  /* Subnav button */\r\n  .subnav .subnavbtn {\r\n    font-size: 16px;\r\n    border: none;\r\n    outline: none;\r\n    padding: 14px 16px;\r\n    background-color: inherit;\r\n    font-family: inherit;\r\n    margin: 0;\r\n  }\r\n  a:link {\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  /* visited link */\r\n  a:visited {\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  /* mouse over link */\r\n  a:hover {\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  /* selected link */\r\n  a:active {\r\n    color: black;\r\n    text-decoration: none;\r\n  }\r\n  /* Style the subnav content - positioned absolute */\r\n  .subnav-content {\r\n    display: none;\r\n    position: absolute;\r\n    font-size: 16px;\r\n    left: 0;\r\n    color:rgb(0, 0, 0);\r\n    /* background-image: linear-gradient(to bottom right, #eca392, #b85842, #da6c52, #eca392); */\r\n    background-color: #ced2d3;\r\n    /* border:2px solid #c43a2f; */\r\n    line-height: 2;\r\n    padding-left: 250px;\r\n    height: 200px;\r\n    width: 100%;\r\n    z-index: 1;\r\n    border-radius: 3px;\r\nbox-shadow: 0px 1px 4px -2px #333;\r\ntext-shadow: 0px -1px #333;\r\n    /* transform: translateY(-2em);\r\n  z-index: -1;\r\n  transition: all 0.3s ease-in-out 0s, visibility 0s linear 0.3s, z-index 0s linear 0.01s; */\r\n  }\r\n  /* Style the subnav links */\r\n  .subnav-content a {\r\n    float: left;\r\n    text-decoration: none;\r\n    color: black;\r\n  }\r\n  /* Add a grey background color on hover */\r\n  .subnav-content a:hover {\r\n    background-color: #eee;\r\n    color: black;\r\n  }\r\n  /* When you move the mouse over the subnav container, open the subnav content */\r\n  .subnav:hover .subnav-content {\r\n    display: block;\r\n    \r\n  }\r\n  .vl {\r\n    border-right: 2px solid #c43a2f;\r\n    position: absolute;\r\n    padding-right: 100px;\r\n  }\r\n  .navpics{\r\n    width: 200px;\r\n    height: 135px;\r\n    margin-left: 50px;\r\n    border-radius: 20px;\r\n  }\r\n \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIsWUFBWTtNQUNWLGtCQUFrQjtVQUNkLFVBQVU7VUFDVixXQUFXO0VBQ25CO0VBQ0E7SUFDRSxZQUFZO0lBQ1osOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsMEJBQTBCO0VBQzVCO0VBQ0E7SUFDRSxnQkFBZ0I7RUFDbEI7RUFFQSxrQkFBa0I7RUFDbEI7SUFDRSxlQUFlO0lBQ2YsWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLG9CQUFvQjtJQUNwQixTQUFTO0VBQ1g7RUFDQTtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7RUFFQSxpQkFBaUI7RUFDakI7SUFDRSxZQUFZO0lBQ1oscUJBQXFCO0VBQ3ZCO0VBRUEsb0JBQW9CO0VBQ3BCO0lBQ0UsWUFBWTtJQUNaLHFCQUFxQjtFQUN2QjtFQUVBLGtCQUFrQjtFQUNsQjtJQUNFLFlBQVk7SUFDWixxQkFBcUI7RUFDdkI7RUFJQSxtREFBbUQ7RUFDbkQ7SUFDRSxhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixPQUFPO0lBQ1Asa0JBQWtCO0lBQ2xCLDRGQUE0RjtJQUM1Rix5QkFBeUI7SUFDekIsOEJBQThCO0lBQzlCLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFdBQVc7SUFDWCxVQUFVO0lBQ1Ysa0JBQWtCO0FBQ3RCLGlDQUFpQztBQUNqQywwQkFBMEI7SUFDdEI7OzRGQUV3RjtFQUMxRjtFQUdBLDJCQUEyQjtFQUMzQjtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7SUFDckIsWUFBWTtFQUNkO0VBRUEseUNBQXlDO0VBQ3pDO0lBQ0Usc0JBQXNCO0lBQ3RCLFlBQVk7RUFDZDtFQUVBLCtFQUErRTtFQUMvRTtJQUNFLGNBQWM7O0VBRWhCO0VBQ0E7SUFDRSwrQkFBK0I7SUFDL0Isa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0QjtFQUNBO0lBQ0UsWUFBWTtJQUNaLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsbUJBQW1CO0VBQ3JCIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGFibGV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIC8qIHBvc2l0aW9uOiBmaXhlZDsgKi9cclxuICAgIC8qIHRvcDogMDsgKi9cclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICB0ZHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2M0M2EyZjtcclxuICB9XHJcbiAgdGFibGUgLHRke1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1mYW1pbHk6IFwiTWFpYW5kcmEgR0RcIjtcclxuICB9XHJcbiAgLnN1Ym5hdiB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICBcclxuICAvKiBTdWJuYXYgYnV0dG9uICovXHJcbiAgLnN1Ym5hdiAuc3VibmF2YnRuIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAxNHB4IDE2cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xyXG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG4gIGE6bGluayB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIHZpc2l0ZWQgbGluayAqL1xyXG4gIGE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIG1vdXNlIG92ZXIgbGluayAqL1xyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAvKiBzZWxlY3RlZCBsaW5rICovXHJcbiAgYTphY3RpdmUge1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICBcclxuICBcclxuICAvKiBTdHlsZSB0aGUgc3VibmF2IGNvbnRlbnQgLSBwb3NpdGlvbmVkIGFic29sdXRlICovXHJcbiAgLnN1Ym5hdi1jb250ZW50IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgY29sb3I6cmdiKDAsIDAsIDApO1xyXG4gICAgLyogYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2VjYTM5MiwgI2I4NTg0MiwgI2RhNmM1MiwgI2VjYTM5Mik7ICovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2VkMmQzO1xyXG4gICAgLyogYm9yZGVyOjJweCBzb2xpZCAjYzQzYTJmOyAqL1xyXG4gICAgbGluZS1oZWlnaHQ6IDI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuYm94LXNoYWRvdzogMHB4IDFweCA0cHggLTJweCAjMzMzO1xyXG50ZXh0LXNoYWRvdzogMHB4IC0xcHggIzMzMztcclxuICAgIC8qIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMmVtKTtcclxuICB6LWluZGV4OiAtMTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dCAwcywgdmlzaWJpbGl0eSAwcyBsaW5lYXIgMC4zcywgei1pbmRleCAwcyBsaW5lYXIgMC4wMXM7ICovXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIC8qIFN0eWxlIHRoZSBzdWJuYXYgbGlua3MgKi9cclxuICAuc3VibmF2LWNvbnRlbnQgYSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLyogQWRkIGEgZ3JleSBiYWNrZ3JvdW5kIGNvbG9yIG9uIGhvdmVyICovXHJcbiAgLnN1Ym5hdi1jb250ZW50IGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIGNvbG9yOiBibGFjaztcclxuICB9XHJcbiAgXHJcbiAgLyogV2hlbiB5b3UgbW92ZSB0aGUgbW91c2Ugb3ZlciB0aGUgc3VibmF2IGNvbnRhaW5lciwgb3BlbiB0aGUgc3VibmF2IGNvbnRlbnQgKi9cclxuICAuc3VibmF2OmhvdmVyIC5zdWJuYXYtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIFxyXG4gIH1cclxuICAudmwge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgI2M0M2EyZjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xyXG4gIH1cclxuICAubmF2cGljc3tcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMTM1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG4gIl19 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".bgrnd{\r\n    background-image: url(\"/assets/background.jpg\"); \r\nheight: 650px;\r\nwidth:100%;\r\nbackground-position:center;\r\n\tbackground-repeat:no-repeat;\r\n\tbackground-size:cover;\r\n}\r\n.bg{\r\n\tbackground-color: #f2f0f1;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtDQUErQztBQUNuRCxhQUFhO0FBQ2IsVUFBVTtBQUNWLDBCQUEwQjtDQUN6QiwyQkFBMkI7Q0FDM0IscUJBQXFCO0FBQ3RCO0FBQ0E7Q0FDQyx5QkFBeUI7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJncm5ke1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZ1wiKTsgXHJcbmhlaWdodDogNjUwcHg7XHJcbndpZHRoOjEwMCU7XHJcbmJhY2tncm91bmQtcG9zaXRpb246Y2VudGVyO1xyXG5cdGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtcclxuXHRiYWNrZ3JvdW5kLXNpemU6Y292ZXI7XHJcbn1cclxuLmJne1xyXG5cdGJhY2tncm91bmQtY29sb3I6ICNmMmYwZjE7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomepageComponent = class HomepageComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomepageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-homepage',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./homepage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/homepage/homepage.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")).default]
    })
], HomepageComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\r\n    font-family: \"Lato\", sans-serif;\r\n    height: none;\r\n}\r\n\r\n.c1\r\n{\r\n    color: black;\r\n}\r\n\r\n.p1\r\n{\r\n    color:black;\r\n}\r\n\r\n.main-head{\r\n    height: 150px;\r\n    background: #FFF;\r\n   \r\n}\r\n\r\n.sidenav {\r\n    height: 100%;\r\n    background-color: rgb(64, 161, 85);\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n    background-image: url(\"/assets/l2.jfif\");\r\n    background-repeat: no-repeat;\r\n    color: black;\r\n}\r\n\r\n.main {\r\n    /* padding: 0px 100px; */\r\n    padding-top: 150px;\r\n    margin-top: -350px;\r\n    \r\n}\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n}\r\n\r\n@media screen and (max-width: 450px) {\r\n    .login-form{\r\n        margin-top: 10%;\r\n    }\r\n\r\n    .register-form{\r\n        margin-top: 10%;\r\n    }\r\n}\r\n\r\n@media screen and (min-width: 768px){\r\n    .main{\r\n        margin-left: 40%; \r\n    }\r\n\r\n    .sidenav{\r\n        width: 40%;\r\n        position: fixed;\r\n        z-index: 1;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n\r\n    .login-form{\r\n        margin-top: 80%;\r\n    }\r\n\r\n    .register-form{\r\n        margin-top: 20%;\r\n    }\r\n}\r\n\r\n.login-main-text{\r\n    margin-top: 20%;\r\n    padding: 60px;\r\n    color: #fff;\r\n}\r\n\r\n.login-main-text h2{\r\n    font-weight: 300;\r\n}\r\n\r\n.btn-black{\r\n    background-color: rgb(64, 161, 85)!important;\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0FBQ2hCOztBQUVBOztJQUVJLFlBQVk7QUFDaEI7O0FBQ0E7O0lBRUksV0FBVztBQUNmOztBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjs7QUFFcEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsd0NBQXdDO0lBQ3hDLDRCQUE0QjtJQUM1QixZQUFZO0FBQ2hCOztBQUdBO0lBQ0ksd0JBQXdCO0lBQ3hCLGtCQUFrQjtJQUNsQixrQkFBa0I7O0FBRXRCOztBQUVBO0lBQ0ksVUFBVSxpQkFBaUIsQ0FBQztBQUNoQzs7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksVUFBVTtRQUNWLGVBQWU7UUFDZixVQUFVO1FBQ1YsTUFBTTtRQUNOLE9BQU87SUFDWDs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLDRDQUE0QztJQUM1QyxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogXCJMYXRvXCIsIHNhbnMtc2VyaWY7XHJcbiAgICBoZWlnaHQ6IG5vbmU7XHJcbn1cclxuXHJcbi5jMVxyXG57XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnAxXHJcbntcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbi5tYWluLWhlYWR7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYmFja2dyb3VuZDogI0ZGRjtcclxuICAgXHJcbn1cclxuXHJcbi5zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NCwgMTYxLCA4NSk7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvbDIuamZpZlwiKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBjb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcblxyXG4ubWFpbiB7XHJcbiAgICAvKiBwYWRkaW5nOiAwcHggMTAwcHg7ICovXHJcbiAgICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAtMzUwcHg7XHJcbiAgICBcclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgLmxvZ2luLWZvcm17XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5yZWdpc3Rlci1mb3Jte1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLm1haW57XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDQwJTsgXHJcbiAgICB9XHJcblxyXG4gICAgLnNpZGVuYXZ7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAgICAgei1pbmRleDogMTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAubG9naW4tZm9ybXtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZ2lzdGVyLWZvcm17XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmxvZ2luLW1haW4tdGV4dHtcclxuICAgIG1hcmdpbi10b3A6IDIwJTtcclxuICAgIHBhZGRpbmc6IDYwcHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmxvZ2luLW1haW4tdGV4dCBoMntcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbn1cclxuXHJcbi5idG4tYmxhY2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjQsIDE2MSwgODUpIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_services_user_registration_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user-registration.service */ "./src/app/services/user-registration.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginComponent = class LoginComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.flag = 1;
    }
    ngOnInit() {
    }
    onLogin(form) {
        let response = this.service.gettingCredentials();
        response.subscribe((data) => this.credentials = data);
        let email = form.value.email;
        let password = form.value.password;
        console.log(this.credentials);
        for (let i = 0; i < this.credentials.length; i++) {
            if (email == this.credentials[i].email && password == this.credentials[i].password && form.valid == true) {
                this.flag = 1;
                alert("Login successfully");
                this.router.navigateByUrl("");
                break;
            }
            else {
                // console.log(this.credentials[i].password);
                this.flag = 0;
            }
        }
        if (this.flag == 0) {
            alert("Invalid Credentials");
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: src_app_services_user_registration_service__WEBPACK_IMPORTED_MODULE_2__["UserRegistrationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/logo/logo.component.css":
/*!*****************************************!*\
  !*** ./src/app/logo/logo.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\r\n    display: block;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n  height: 145px;\r\n}\r\nspan{\r\n    float: right;\r\n    font-size: 25px;\r\n    color: #c43a2f;\r\n    line-height: 2;\r\n    margin-right: 10px;\r\n}\r\nbutton{\r\n  float:right;\r\n  padding: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9nby9sb2dvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsYUFBYTtBQUNmO0FBQ0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbG9nby9sb2dvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgaGVpZ2h0OiAxNDVweDtcclxufVxyXG5zcGFue1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICNjNDNhMmY7XHJcbiAgICBsaW5lLWhlaWdodDogMjtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5idXR0b257XHJcbiAgZmxvYXQ6cmlnaHQ7XHJcbiAgcGFkZGluZzogMHB4O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/logo/logo.component.ts":
/*!****************************************!*\
  !*** ./src/app/logo/logo.component.ts ***!
  \****************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LogoComponent = class LogoComponent {
    // public imagesUrl;
    constructor() { }
    ngOnInit() {
        // this.imagesUrl = [
        //   'assets/slideshow1.jpg',
        //   'assets/slideshow2.jpg',
        //   'assets/slideshow3.jpg'
        // ];
    }
};
LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./logo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/logo/logo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./logo.component.css */ "./src/app/logo/logo.component.css")).default]
    })
], LogoComponent);



/***/ }),

/***/ "./src/app/our-story/our-story.component.css":
/*!***************************************************!*\
  !*** ./src/app/our-story/our-story.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("p{\r\n    text-align: center;\r\n    -webkit-text-emphasis: emphasis;\r\n            text-emphasis: emphasis;\r\n    font-family: Edwardian Script ITC;\r\n    font-size: 72px;\r\n    color: #c43a2f;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3VyLXN0b3J5L291ci1zdG9yeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLCtCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsaUNBQWlDO0lBQ2pDLGVBQWU7SUFDZixjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvb3VyLXN0b3J5L291ci1zdG9yeS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsicHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHRleHQtZW1waGFzaXM6IGVtcGhhc2lzO1xyXG4gICAgZm9udC1mYW1pbHk6IEVkd2FyZGlhbiBTY3JpcHQgSVRDO1xyXG4gICAgZm9udC1zaXplOiA3MnB4O1xyXG4gICAgY29sb3I6ICNjNDNhMmY7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/our-story/our-story.component.ts":
/*!**************************************************!*\
  !*** ./src/app/our-story/our-story.component.ts ***!
  \**************************************************/
/*! exports provided: OurStoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurStoryComponent", function() { return OurStoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let OurStoryComponent = class OurStoryComponent {
    constructor() { }
    ngOnInit() {
    }
};
OurStoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-our-story',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./our-story.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/our-story/our-story.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./our-story.component.css */ "./src/app/our-story/our-story.component.css")).default]
    })
], OurStoryComponent);



/***/ }),

/***/ "./src/app/services/product.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/product.service.ts ***!
  \*********************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
// import { Injectable } from '@angular/core';

// import { Product} from '../entities/product.entity';
// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {
// products :Product[]= [
//   new Product(1, "AMINA TOWELS - STONE GREY", "Lightweight, absorbent, and oh-so-soft, this oversized Egyptian cotton towel is sure to become your can’t-live-without staple. Hand-loomed by a weaving cooperative right outside of Marrakech, each towel takes over a day to complete. All made start to finish in a fair trade environment.", 1000, "assets/bath1.jpg"),
//   new Product(2, "IMABARI WAFFLE TOWELS", "Lightweight, absorbent, and quick to dry. Woven from soft, long-staple Pima cotton. It doesn’t get better than luxe Japanese waffle weave towels.", 2500, "assets/bath2.jpg"),
//   new Product(3, "SAHAR BATH RUG - IVORY & BLACK", "Hand-loomed by a weaving cooperative right outside of Marrakech, each Turkish style towel takes over a day to complete. All made start to finish in a fair trade environment.", 600, "assets/bath3.jpg"),
//   new Product(4, "HINOKI WOOD BATH MAT ", "Create a zen-like retreat with our modern take on the bath mat, handcrafted from beautiful Japanese Hinoki wood", 1500, "assets/bath4.jpg"),
//   new Product(5, "AMINA BATH RUG - STONE GREY", "Crafted in a stone grey hue, finished with subtle tassels, this small bath rug instantly ups your bathroom game. Hand-loomed using premium cotton.", 500, "assets/bath5.jpg"),
//   new Product(6, "FARAH TOWELS - CREAM", "Our spin on the classic white towel — incredibly soft and absorbent Egyptian cotton, hand-loomed to nubby perfection. The result is an organic texture that’s feel-it-to-believe-it soft with a beautiful drape.", 1600, "assets/bath6.jpg")
// ]
//   constructor() { }
//   getProducts(): Product[]{
//     return this.products
//   }
// }

let ProductService = class ProductService {
    constructor() {
        this.products = [
            { type: 1, id: 'p01', name: 'AMINA TOWELS - STONE GREY', price: 1000, photo: 'assets/bath1.jpg', photo1: 'assets/bath12.jpg' },
            { type: 1, id: 'p02', name: 'IMABARI WAFFLE TOWELS', price: 1500, photo: 'assets/bath2.jpg', photo1: 'assets/bath22.jpg' },
            { type: 1, id: 'p03', name: 'SAHAR BATH RUG - IVORY & BLACK', price: 1000, photo: 'assets/bath3.jpg', photo1: 'assets/bath32.jpg' },
            { type: 1, id: 'p04', name: 'HINOKI WOOD BATH MAT', price: 2500, photo: 'assets/bath4.jpg', photo1: 'assets/bath42.jpg' },
            { type: 1, id: 'p05', name: 'AMINA BATH RUG - STONE GREY', price: 1600, photo: 'assets/bath5.jpg', photo1: 'assets/bath52.jpg' },
            { type: 1, id: 'p06', name: 'FARAH TOWELS - CREAM', price: 1000, photo: 'assets/bath6.jpg', photo1: 'assets/bath62.jpg' },
            { type: 8, id: 'p36', name: 'LOKTAK SHOWER CURTAIN- SAND', price: 500, photo: 'assets/c1.jpg', photo1: 'assets/c12.jpg' },
            { type: 8, id: 'p37', name: 'LOKTAK SHOWER CURTAIN- WHITE', price: 500, photo: 'assets/c2.jpg', photo1: 'assets/c22.jpg' },
            { type: 8, id: 'p38', name: 'CHILKA SHOWER CURTAIN- SKY', price: 600, photo: 'assets/c3.jpg', photo1: 'assets/c32.jpg' },
            { type: 3, id: 'p13', name: 'TESSO LOUNGE CHAIR - LINEN CUSHION', price: 4000, photo: 'assets/ch1.jpg', photo1: 'assets/ch12.jpg' },
            { type: 3, id: 'p14', name: 'TESSO LOUNGE CHAIR - LEATHER CUSHION', price: 4500, photo: 'assets/ch2.jpg', photo1: 'assets/ch22.jpg' },
            { type: 3, id: 'p15', name: 'MERU CHAIR - MINDI', price: 2000, photo: 'assets/ch3.jpg', photo1: 'assets/ch32.jpg' },
            { type: 3, id: 'p16', name: 'LOMBOK RATTAN LOUNGE CHAIR', price: 1500, photo: 'assets/ch4.jpg', photo1: 'assets/ch42.jpg' },
            { type: 3, id: 'p17', name: 'PALERMO CHAIR - BLACK & NATURAL', price: 1800, photo: 'assets/ch5.jpg', photo1: 'assets/ch52.jpg' },
            { type: 3, id: 'p18', name: 'PALERMO CHAIR - BLACK & GREY COWHIDE', price: 1800, photo: 'assets/ch6.jpg', photo1: 'assets/ch62.jpg' },
            { type: 9, id: 'p39', name: 'APASCO 5-PIECE MEZCAL SET - CLEAR', price: 500, photo: 'assets/k1.jpg', photo1: 'assets/k12.jpg' },
            { type: 9, id: 'p40', name: 'LA PIEDRA COASTERS - SET OF 6', price: 300, photo: 'assets/k2.jpg', photo1: 'assets/k22.jpg' },
            { type: 9, id: 'p41', name: 'HALSTON MUGS-CREAM', price: 450, photo: 'assets/k3.jpg', photo1: 'assets/k32.jpg' },
            { type: 9, id: 'p42', name: 'HALSTON MUGS-OLIVE', price: 450, photo: 'assets/k4.jpg', photo1: 'assets/k42.jpg' },
            { type: 9, id: 'p43', name: 'HALSTON PITCHERS - NAVY', price: 500, photo: 'assets/k5.jpg', photo1: 'assets/k52.jpg' },
            { type: 9, id: 'p44', name: 'THE BARISTA SET - EARTH', price: 700, photo: 'assets/k6.jpg', photo1: 'assets/k62.jpg' },
            { type: 9, id: 'p45', name: 'PUEBLA MARBLE ENTERTAINING SET', price: 900, photo: 'assets/k7.jpg', photo1: 'assets/k72.jpg' },
            { type: 9, id: 'p46', name: 'PASHAN COPPER VASES', price: 500, photo: 'assets/k8.jpg', photo1: 'assets/k82.jpg' },
            { type: 9, id: 'p47', name: 'DASAR BRONZE TRAYS', price: 800, photo: 'assets/k9.jpg', photo1: 'assets/k92.jpg' },
            { type: 9, id: 'p48', name: 'GRANO COFFEE SCOOP', price: 200, photo: 'assets/k10.jpg', photo1: 'assets/k102.jpg' },
            { type: 9, id: 'p49', name: 'ORO CACAO CUPS', price: 800, photo: 'assets/k11.jpg', photo1: 'assets/k112.jpg' },
            { type: 9, id: 'p50', name: 'PUEBLA MARBLE PLANTERS - SET OF 2', price: 700, photo: 'assets/k121.jpg', photo1: 'assets/k122.jpg' },
            { type: 4, id: 'p19', name: 'NAGA RATTAN SIDE TABLE', price: 1500, photo: 'assets/ts1.jpg', photo1: 'assets/ts12.jpg' },
            { type: 4, id: 'p20', name: 'JAVA RATTAN COFFEE TABLE', price: 1700, photo: 'assets/ts2.jpg', photo1: 'assets/ts22.jpg' },
            { type: 4, id: 'p21', name: 'KAYAN NIGHTSTAND - MINDI & CANE', price: 2000, photo: 'assets/ts3.jpg', photo1: 'assets/ts32.jpg' },
            { type: 2, id: 'p07', name: 'BICO BED BLANKET-BLACK', price: 1500, photo: 'assets/bb1.jpg', photo1: 'assets/bb12.jpg' },
            { type: 2, id: 'p08', name: 'BICO BED BLANKET-GREY', price: 1500, photo: 'assets/bb2.jpg', photo1: 'assets/bb22.jpg' },
            { type: 2, id: 'p09', name: 'BICO BED BLANKET-CREAM', price: 1500, photo: 'assets/bb3.jpg', photo1: 'assets/bb32.jpg' },
            { type: 2, id: 'p10', name: 'DOHA BED BLANKET', price: 1000, photo: 'assets/bb4.jpg', photo1: 'assets/bb42.jpg' },
            { type: 2, id: 'p11', name: 'RAHIM COTTON BED BLANKET', price: 1200, photo: 'assets/bb5.jpg', photo1: 'assets/bb52.jpg' },
            { type: 2, id: 'p12', name: 'ADARA WEDDING BLANKET', price: 2500, photo: 'assets/bb62.jpg', photo1: 'assets/bb6.jpg' },
            { type: 6, id: 'p26', name: 'STONEWASHED LINEN SHEET SET - GRAPHIE STRIPE', price: 900, photo: 'assets/sp1.jpg', photo1: 'assets/sp12.jpg' },
            { type: 6, id: 'p27', name: 'STONEWASHED LINEN SHEET SET - SAND STRIPE', price: 900, photo: 'assets/sp2.jpg', photo1: 'assets/sp22.jpg' },
            { type: 6, id: 'p28', name: 'STONEWASHED LINEN SHEET SET - SLATE BLUE', price: 900, photo: 'assets/sp3.jpg', photo1: 'assets/sp32.jpg' },
            { type: 6, id: 'p29', name: 'STONEWASHED LINEN PILLOWCASES-SAND STRIPE', price: 400, photo: 'assets/sp4.jpg', photo1: 'assets/sp42.jpg' },
            { type: 6, id: 'p30', name: 'STONEWASHED LINEN PILLOWCASES-SLATE BLUE', price: 400, photo: 'assets/sp5.jpg', photo1: 'assets/sp52.jpg' },
            { type: 6, id: 'p31', name: 'STONEWASHED LINEN PILLOWCASES-OLIVE', price: 400, photo: 'assets/sp6.jpg', photo1: 'assets/sp62.jpg' },
            { type: 5, id: 'p22', name: 'TORRES LEATHER OTTOMAN - MEDIUM & LARGE', price: 3000, photo: 'assets/op1.jpg', photo1: 'assets/op12.jpg' },
            { type: 5, id: 'p23', name: 'PALERMO TRIPOLINA CAMP STOOL', price: 900, photo: 'assets/op2.jpg', photo1: 'assets/op22.jpg' },
            { type: 5, id: 'p24', name: 'RIAD LEATHER OTTOMAN', price: 1000, photo: 'assets/op3.jpg', photo1: 'assets/op32.jpg' },
            { type: 5, id: 'p25', name: 'SAN RAFAEL SAFARI STOOL', price: 1200, photo: 'assets/op4.jpg', photo1: 'assets/op42.jpg' },
        ];
    }
    findAll() {
        return this.products;
    }
    find(id) {
        return this.products[this.getSelectedIndex(id)];
    }
    getSelectedIndex(id) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }
};
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ProductService);



/***/ }),

/***/ "./src/app/services/user-registration.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/services/user-registration.service.ts ***!
  \*******************************************************/
/*! exports provided: UserRegistrationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserRegistrationService", function() { return UserRegistrationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user */ "./src/app/user.ts");




let UserRegistrationService = class UserRegistrationService {
    constructor(http) {
        this.http = http;
        this.user = new _user__WEBPACK_IMPORTED_MODULE_3__["User"]("", "", "", "", "");
    }
    onRegister(user) {
        return this.http.post("http://localhost:8080/create", user, { responseType: 'text' });
    }
    gettingCredentials() {
        return this.http.get("http://localhost:8080/getAll");
    }
};
UserRegistrationService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
UserRegistrationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], UserRegistrationService);



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/* .login-container{\r\n    margin-top: 5%;\r\n    margin-bottom: 5%;\r\n}\r\n.login-form-1{\r\n    padding: 5%;\r\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.login-form-1 h3{\r\n    text-align: center;\r\n    color: #333;\r\n}\r\n.login-form-2{\r\n    padding: 5%;\r\n    background-image: url(\"/assets/background.jpg\");\r\n    box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);\r\n}\r\n.login-form-2 h3{\r\n    text-align: center;\r\n    color: #fff;\r\n}\r\n.login-container form{\r\n    padding: 10%;\r\n}\r\n.btnSubmit\r\n{\r\n    width: 50%;\r\n    border-radius: 1rem;\r\n    padding: 1.5%;\r\n    border: none;\r\n    cursor: pointer;\r\n}\r\n.login-form-1 .btnSubmit{\r\n    font-weight: 600;\r\n    color: #fff;\r\n    background-color: #0062cc;\r\n}\r\n.login-form-2 .btnSubmit{\r\n    font-weight: 600;\r\n    color: #0062cc;\r\n    background-color: #fff;\r\n}\r\n.login-form-2 .ForgetPwd{\r\n    color: #fff;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n}\r\n.login-form-1 .ForgetPwd{\r\n    color: #0062cc;\r\n    font-weight: 600;\r\n    text-decoration: none;\r\n} */\r\n\r\n\r\n\r\nbody {\r\n    font-family: \"Lato\", sans-serif;\r\n    height: none;\r\n}\r\n\r\n\r\n\r\n.c1\r\n{\r\n    color: black;\r\n}\r\n\r\n\r\n\r\n.p1\r\n{\r\n    color:black;\r\n}\r\n\r\n\r\n\r\n.main-head{\r\n    height: 150px;\r\n    background: #FFF;\r\n   \r\n}\r\n\r\n\r\n\r\n.sidenav {\r\n    height: 100%;\r\n    background-color: rgb(64, 161, 85);\r\n    overflow-x: hidden;\r\n    padding-top: 20px;\r\n    background-image: url(\"/assets/l2.jfif\");\r\n    background-repeat: no-repeat;\r\n    color: black;\r\n}\r\n\r\n\r\n\r\n.main {\r\n    /* padding: 0px 100px; */\r\n    padding-top: 150px;\r\n    margin-top: -350px;\r\n    \r\n}\r\n\r\n\r\n\r\n@media screen and (max-height: 450px) {\r\n    .sidenav {padding-top: 15px;}\r\n}\r\n\r\n\r\n\r\n@media screen and (max-width: 450px) {\r\n    .login-form{\r\n        margin-top: 10%;\r\n    }\r\n\r\n    .register-form{\r\n        margin-top: 10%;\r\n    }\r\n}\r\n\r\n\r\n\r\n@media screen and (min-width: 768px){\r\n    .main{\r\n        margin-left: 40%; \r\n    }\r\n\r\n    .sidenav{\r\n        width: 40%;\r\n        position: fixed;\r\n        z-index: 1;\r\n        top: 0;\r\n        left: 0;\r\n    }\r\n\r\n    .login-form{\r\n        margin-top: 80%;\r\n    }\r\n\r\n    .register-form{\r\n        margin-top: 20%;\r\n    }\r\n}\r\n\r\n\r\n\r\n.login-main-text{\r\n    margin-top: 20%;\r\n    padding: 60px;\r\n    color: #fff;\r\n}\r\n\r\n\r\n\r\n.login-main-text h2{\r\n    font-weight: 300;\r\n}\r\n\r\n\r\n\r\n.btn-black{\r\n    background-color: rgb(64, 161, 85)!important;\r\n    color: #fff;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtREc7Ozs7QUFJSDtJQUNJLCtCQUErQjtJQUMvQixZQUFZO0FBQ2hCOzs7O0FBRUE7O0lBRUksWUFBWTtBQUNoQjs7OztBQUNBOztJQUVJLFdBQVc7QUFDZjs7OztBQUNBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjs7QUFFcEI7Ozs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQ0FBa0M7SUFDbEMsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQix3Q0FBd0M7SUFDeEMsNEJBQTRCO0lBQzVCLFlBQVk7QUFDaEI7Ozs7QUFHQTtJQUNJLHdCQUF3QjtJQUN4QixrQkFBa0I7SUFDbEIsa0JBQWtCOztBQUV0Qjs7OztBQUVBO0lBQ0ksVUFBVSxpQkFBaUIsQ0FBQztBQUNoQzs7OztBQUVBO0lBQ0k7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOzs7O0FBRUE7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLFVBQVU7UUFDVixlQUFlO1FBQ2YsVUFBVTtRQUNWLE1BQU07UUFDTixPQUFPO0lBQ1g7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKOzs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsYUFBYTtJQUNiLFdBQVc7QUFDZjs7OztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOzs7O0FBRUE7SUFDSSw0Q0FBNEM7SUFDNUMsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogLmxvZ2luLWNvbnRhaW5lcntcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNSU7XHJcbn1cclxuLmxvZ2luLWZvcm0tMXtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgYm94LXNoYWRvdzogMCA1cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDlweCAyNnB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcclxufVxyXG4ubG9naW4tZm9ybS0xIGgze1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbn1cclxuLmxvZ2luLWZvcm0tMntcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9iYWNrZ3JvdW5kLmpwZ1wiKTtcclxuICAgIGJveC1zaGFkb3c6IDAgNXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA5cHggMjZweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuLmxvZ2luLWZvcm0tMiBoM3tcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5sb2dpbi1jb250YWluZXIgZm9ybXtcclxuICAgIHBhZGRpbmc6IDEwJTtcclxufVxyXG4uYnRuU3VibWl0XHJcbntcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgcGFkZGluZzogMS41JTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubG9naW4tZm9ybS0xIC5idG5TdWJtaXR7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2MmNjO1xyXG59XHJcbi5sb2dpbi1mb3JtLTIgLmJ0blN1Ym1pdHtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBjb2xvcjogIzAwNjJjYztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuLmxvZ2luLWZvcm0tMiAuRm9yZ2V0UHdke1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcbi5sb2dpbi1mb3JtLTEgLkZvcmdldFB3ZHtcclxuICAgIGNvbG9yOiAjMDA2MmNjO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufSAqL1xyXG5cclxuXHJcblxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcclxuICAgIGhlaWdodDogbm9uZTtcclxufVxyXG5cclxuLmMxXHJcbntcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG4ucDFcclxue1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuLm1haW4taGVhZHtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICBcclxufVxyXG5cclxuLnNpZGVuYXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY0LCAxNjEsIDg1KTtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9sMi5qZmlmXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGNvbG9yOiBibGFjaztcclxufVxyXG5cclxuXHJcbi5tYWluIHtcclxuICAgIC8qIHBhZGRpbmc6IDBweCAxMDBweDsgKi9cclxuICAgIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICAgIG1hcmdpbi10b3A6IC0zNTBweDtcclxuICAgIFxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcclxuICAgIC5zaWRlbmF2IHtwYWRkaW5nLXRvcDogMTVweDt9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ1MHB4KSB7XHJcbiAgICAubG9naW4tZm9ybXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnJlZ2lzdGVyLWZvcm17XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTAlO1xyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAubWFpbntcclxuICAgICAgICBtYXJnaW4tbGVmdDogNDAlOyBcclxuICAgIH1cclxuXHJcbiAgICAuc2lkZW5hdntcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICB6LWluZGV4OiAxO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sb2dpbi1mb3Jte1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDgwJTtcclxuICAgIH1cclxuXHJcbiAgICAucmVnaXN0ZXItZm9ybXtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMCU7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubG9naW4tbWFpbi10ZXh0e1xyXG4gICAgbWFyZ2luLXRvcDogMjAlO1xyXG4gICAgcGFkZGluZzogNjBweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ubG9naW4tbWFpbi10ZXh0IGgye1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxufVxyXG5cclxuLmJ0bi1ibGFja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2NCwgMTYxLCA4NSkhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_user_registration_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/user-registration.service */ "./src/app/services/user-registration.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SignupComponent = class SignupComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
    }
    ngOnInit() {
    }
    onAddPost(form) {
        console.log("hello");
        let response = this.service.onRegister(form.value);
        response.subscribe((data) => console.log(data));
        alert("You have been registered successfully.");
        this.router.navigateByUrl("");
    }
};
SignupComponent.ctorParameters = () => [
    { type: src_app_services_user_registration_service__WEBPACK_IMPORTED_MODULE_1__["UserRegistrationService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
        selector: 'app-signup',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")).default]
    })
], SignupComponent);



/***/ }),

/***/ "./src/app/user.ts":
/*!*************************!*\
  !*** ./src/app/user.ts ***!
  \*************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class User {
    constructor(firstName, lastName, mob, email, password) {
    }
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\user\Desktop\EcoDecor\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
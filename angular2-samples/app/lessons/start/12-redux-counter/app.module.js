/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var redux_1 = require('redux');
var counter_reducer_1 = require('./counter-reducer');
var app_store_1 = require('./app-store');
var CounterComponent_1 = require('./CounterComponent');
var devtools = window['devToolsExtension'] ?
    window['devToolsExtension']() : function (f) { return f; };
var store = redux_1.createStore(counter_reducer_1.counterReducer, devtools);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                CounterComponent_1.default
            ],
            imports: [platform_browser_1.BrowserModule],
            bootstrap: [CounterComponent_1.default],
            providers: [
                { provide: app_store_1.AppStore, useValue: store }
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
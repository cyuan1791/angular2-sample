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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Copyright 2016, Fullstack.io, LLC.
 *
 * This source code is licensed under the MIT-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
var core_1 = require('@angular/core');
var app_store_1 = require('./app-store');
var CounterActions = require('./counter-action-creators');
var CounterComponent = (function () {
    function CounterComponent(store) {
        var _this = this;
        this.store = store;
        store.subscribe(function () { return _this.readState(); });
        this.readState();
    }
    CounterComponent.prototype.readState = function () {
        var state = this.store.getState();
        this.counter = state.counter;
    };
    CounterComponent.prototype.increment = function () {
        this.store.dispatch(CounterActions.increment());
    };
    CounterComponent.prototype.decrement = function () {
        this.store.dispatch(CounterActions.decrement());
    };
    CounterComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <div class=\"row\">\n      <div class=\"col-sm-6 col-md-4\">\n        <div class=\"thumbnail\">\n          <div class=\"caption\">\n            <h3>Counter</h3>\n            <p>Custom Store</p>\n\n            <p>\n              The counter value is:\n              <b>{{ counter }}</b>\n            </p>\n\n            <p>\n              <button (click)=\"increment()\"\n                      class=\"btn btn-primary\">\n                Increment\n              </button>\n              <button (click)=\"decrement()\"\n                      class=\"btn btn-default\">\n                 Decrement\n              </button>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __param(0, core_1.Inject(app_store_1.AppStore)), 
        __metadata('design:paramtypes', [Object])
    ], CounterComponent);
    return CounterComponent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = CounterComponent;
//# sourceMappingURL=CounterComponent.js.map
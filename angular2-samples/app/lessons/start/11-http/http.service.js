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
var core_1 = require('@angular/core');
var http_1 = require("@angular/http");
require('rxjs/Rx');
var Rx_1 = require("rxjs/Rx");
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.getData = function () {
        return this.http.get('https://httpsampe.firebaseio.com/title.json')
            .map(function (response) { return response.json(); });
    };
    HttpService.prototype.sendData = function (user) {
        var body = JSON.stringify(user);
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post('https://httpsampe.firebaseio.com/data.json', body, {
            headers: headers
        })
            .map(function (data) { return data.json(); })
            .catch(this.handleError);
    };
    HttpService.prototype.getOwnData = function () {
        return this.http.get('https://httpsampe.firebaseio.com/data.json')
            .map(function (response) { return response.json(); });
    };
    HttpService.prototype.handleError = function (error) {
        console.log(error);
        return Rx_1.Observable.throw(error.json());
    };
    HttpService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], HttpService);
    return HttpService;
}());
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map
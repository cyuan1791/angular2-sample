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
// ***********************************
// file data.service.ts
var core_1 = require('@angular/core');
var log_service_1 = require('./log.service');
// for pushData, so Component B could subscribe
var DataService = (function () {
    function DataService(logService) {
        this.logService = logService;
        this.pushdata = new core_1.EventEmitter();
        this.data = [];
    }
    ;
    DataService.prototype.addData = function (input) {
        this.data.push(input);
        this.logService.writeToLog('Saved item: ' + input);
    };
    DataService.prototype.getData = function () {
        return this.data;
    };
    DataService.prototype.pushData = function (value) {
        this.pushdata.emit(value);
        console.log('pushData:' + value);
    };
    DataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [log_service_1.LogService])
    ], DataService);
    return DataService;
}());
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map
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
var log_service_1 = require('./log.service');
var data_service_1 = require('./data.service');
// Enter test at input and click log, will send it to console log
var CmpBComponent = (function () {
    function CmpBComponent(logService, dataService) {
        this.logService = logService;
        this.dataService = dataService;
        this.value = '';
        this.items = [];
    }
    CmpBComponent.prototype.onLog = function (value) {
        this.logService.writeToLog(value);
    };
    CmpBComponent.prototype.onStore = function (value) {
        this.dataService.addData(value);
    };
    CmpBComponent.prototype.onGet = function () {
        this.items = this.dataService.getData();
    };
    CmpBComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.pushdata.subscribe(function (data) { return _this.value = data; });
    };
    CmpBComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cmpb',
            template: "\n    <div>\n      <h5> Component B </h5>\n      <input type='text' #input>\n      <button (click)='onLog(input.value)'>Log</button>\n      <button (click)='onStore(input.value)'>Store</button>\n      <div>\n        <button (click)='onGet()'> Refresh Storage</button>\n        <ul><li *ngFor='let item of items'>{{item}}</li></ul>\n      </div>\n      {{value}}\n    </div>,\n"
        }), 
        __metadata('design:paramtypes', [log_service_1.LogService, data_service_1.DataService])
    ], CmpBComponent);
    return CmpBComponent;
}());
exports.CmpBComponent = CmpBComponent;
//# sourceMappingURL=cmpb.component.js.map
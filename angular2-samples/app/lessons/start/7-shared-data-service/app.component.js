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
// There are 5 files in this sample
// 1. app.component.ts
// 2. cmpa.component.ts
// 3. cmpb.component.ts
// 4. log.service.ts
// 5. data.service.ts
// ***********************************
// file app.component.ts
var core_1 = require('@angular/core');
var cmpa_component_1 = require('./cmpa.component');
var cmpb_component_1 = require('./cmpb.component');
var log_service_1 = require('./log.service');
var data_service_1 = require('./data.service');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'my-app',
            template: "\n        <div>\n        <ol>\n        <li> Enter text and  Click Log will send text to conole</li>\n        <li> Enter text and click Store will store into an array. Click Refresh Storage will display array content. Component A and B share the same storage array.</li>\n        <li> Enter text and click Send in Component A will send data to component B</li>\n        </ol>\n        </div>\n        <cmpa></cmpa>\n        <hr>\n        <cmpb></cmpb>\n        ",
            providers: [cmpa_component_1.CmpAComponent, cmpb_component_1.CmpBComponent, log_service_1.LogService, data_service_1.DataService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
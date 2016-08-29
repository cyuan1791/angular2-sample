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
var forms_1 = require('@angular/forms');
var DataDrivenComponent = (function () {
    function DataDrivenComponent() {
        this.myForm = new forms_1.FormGroup({
            'username': new forms_1.FormControl(),
            'email': new forms_1.FormControl(),
            'password': new forms_1.FormControl()
        });
    }
    DataDrivenComponent.prototype.onSubmit = function () {
        console.log(this.myForm);
    };
    DataDrivenComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'data-driven',
            templateUrl: 'data-driven.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], DataDrivenComponent);
    return DataDrivenComponent;
}());
exports.DataDrivenComponent = DataDrivenComponent;
//# sourceMappingURL=data-driven.component.js.map
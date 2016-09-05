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
var forms_1 = require("@angular/forms");
var DataDrivenComponent = (function () {
    function DataDrivenComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.genders = [
            'male',
            'female'
        ];
        this.myForm = formBuilder.group({
            'userData': formBuilder.group({
                'username': ['Mark', [forms_1.Validators.required, this.exampleValidator]],
                'email': ['', [
                        forms_1.Validators.required,
                        forms_1.Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
                    ]]
            }),
            'password': ['', forms_1.Validators.required],
            'gender': ['male'],
            'hobbies': formBuilder.array([
                ['Cooking', forms_1.Validators.required, this.asyncExampleValidator]
            ])
        });
        this.myForm.statusChanges.subscribe(function (data) { return console.log(data); });
    }
    DataDrivenComponent.prototype.onAddHobby = function () {
        this.myForm.find('hobbies').push(new forms_1.FormControl('', forms_1.Validators.required, this.asyncExampleValidator));
    };
    DataDrivenComponent.prototype.onSubmit = function () {
        console.log(this.myForm);
    };
    DataDrivenComponent.prototype.exampleValidator = function (control) {
        if (control.value === 'Example') {
            return { example: true };
        }
        return null;
    };
    DataDrivenComponent.prototype.asyncExampleValidator = function (control) {
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value == 'Example') {
                    resolve({ 'invalid': true });
                }
                else {
                    resolve(null);
                }
            }, 1500);
        });
        return promise;
    };
    DataDrivenComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'data-driven',
            templateUrl: 'data-driven.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder])
    ], DataDrivenComponent);
    return DataDrivenComponent;
}());
exports.DataDrivenComponent = DataDrivenComponent;
//# sourceMappingURL=data-driven.component.js.map
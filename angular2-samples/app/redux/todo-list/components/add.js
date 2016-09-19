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
var store_1 = require('../store');
var Add = (function () {
    function Add() {
        this.myForm = new forms_1.FormGroup({
            'newtodo': new forms_1.FormControl()
        });
    }
    Add.prototype.onSubmit = function () {
        store_1.addTodo(this.myForm.value['newtodo']);
        console.log(this.myForm);
        console.log(this.myForm.valid);
        console.log(this.myForm.value['newtodo']);
    };
    Add.prototype.ngOnInit = function () { };
    Add = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-todo',
            template: "\n<form [formGroup]='myForm' (ngSubmit)='onSubmit()'>\n  <div class='form-group'  >\n    <label for='newtodo'>Add a new todo </label>\n    <input \n    type='text' \n    class='form-control' \n    id='newtodo'\n    formControlName='newtodo'\n    >\n\n\n  <button type='submit' class='btn btn-default'>Submit</button>\n  </div>\n</form>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], Add);
    return Add;
}());
exports.Add = Add;
//# sourceMappingURL=add.js.map
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
// AddTodo (components/addTodo.ts)
var core_1 = require('@angular/core');
var store_1 = require('../store');
var AddTodo = (function () {
    function AddTodo() {
        this.addTodo = store_1.addTodo;
    }
    AddTodo = __decorate([
        core_1.Component({
            selector: 'AddTodo',
            template: "\n    <form (submit)=\"addTodo(newTodo)\" class=\"panel panel-default\">\n      <input name=\"newTodo\" class=\"form-control\" [(ngModel)]=\"newTodo\"\n       />\n    </form>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AddTodo);
    return AddTodo;
}());
exports.AddTodo = AddTodo;
//# sourceMappingURL=addTodo.js.map
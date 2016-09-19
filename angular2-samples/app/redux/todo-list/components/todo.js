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
// Todo (components/todo.ts)
var core_1 = require('@angular/core');
var store_1 = require('../store');
//*ngIf="todo|json"
var Todo = (function () {
    function Todo() {
        // Pass through to the TodoStore
        this.toggleTodo = store_1.toggleTodo;
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Todo.prototype, "todo", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], Todo.prototype, "index", void 0);
    Todo = __decorate([
        core_1.Component({
            selector: 'Todo',
            template: "\n\n    <li *ngIf=\"todo|json\" [ngClass]=\"{completed: todo.completed}\"\n      (click)=\"toggleTodo(index)\"\n      class=\"list-group-item\">\n      {{index}} - {{todo.title}}\n    </li>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], Todo);
    return Todo;
}());
exports.Todo = Todo;
//# sourceMappingURL=todo.js.map
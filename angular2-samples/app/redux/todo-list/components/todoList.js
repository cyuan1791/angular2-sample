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
// TodoList (components/todoList.ts)
var core_1 = require('@angular/core');
// 
var TodoList = (function () {
    function TodoList() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], TodoList.prototype, "todos", void 0);
    TodoList = __decorate([
        core_1.Component({
            selector: 'TodoList',
            template: "\n    <ul class=\"list-group\">\n     <Todo *ngFor='let p_todo of todos; let i=index' [index] =\"i\" [todo]=\"p_todo\"></Todo>\n\n    </ul>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], TodoList);
    return TodoList;
}());
exports.TodoList = TodoList;
//# sourceMappingURL=todoList.js.map
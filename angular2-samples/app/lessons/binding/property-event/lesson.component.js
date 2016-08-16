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
var core_1 = require("@angular/core");
var LessonComponent = (function () {
    function LessonComponent() {
        this.isStar = true;
    }
    LessonComponent.prototype.onClick = function ($event) {
        if (this.isStar) {
            this.isStar = false;
        }
        else {
            this.isStar = true;
        }
        console.log('click', $event);
    };
    LessonComponent = __decorate([
        core_1.Component({
            selector: "lesson",
            //
            // (click)="onClick($event)"
            // on-click="onClick($event)"
            // (click) and on-click are identical
            template: "\n        Lesson for class and event binding : Click the star \n        <i class=\"glyphicon\"\n            (click)=\"onClick($event)\"\n            [class.glyphicon-star]=\"isStar\"\n            [class.glyphicon-star-empty]=\"!isStar\"\n        ></i>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], LessonComponent);
    return LessonComponent;
}());
exports.LessonComponent = LessonComponent;
//# sourceMappingURL=lesson.component.js.map
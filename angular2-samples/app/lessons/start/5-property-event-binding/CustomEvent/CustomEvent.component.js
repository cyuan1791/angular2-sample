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
var CustomEventComponent = (function () {
    function CustomEventComponent() {
        this.isStar = true;
        this.change = new core_1.EventEmitter();
    }
    CustomEventComponent.prototype.onClick = function ($event) {
        this.isStar = !this.isStar;
        this.change.emit({ newValue: this.isStar });
        console.log('click', $event);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], CustomEventComponent.prototype, "isStar", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], CustomEventComponent.prototype, "change", void 0);
    CustomEventComponent = __decorate([
        core_1.Component({
            selector: "custom-event",
            //
            // (click)="onClick($event)"
            // on-click="onClick($event)"
            // (click) and on-click are identical
            template: "\n        Click the star \n        <i class=\"glyphicon\"\n            (click)=\"onClick($event)\"\n            [class.glyphicon-star]=\"isStar\"\n            [class.glyphicon-star-empty]=\"!isStar\"\n        ></i>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], CustomEventComponent);
    return CustomEventComponent;
}());
exports.CustomEventComponent = CustomEventComponent;
//# sourceMappingURL=CustomEvent.component.js.map
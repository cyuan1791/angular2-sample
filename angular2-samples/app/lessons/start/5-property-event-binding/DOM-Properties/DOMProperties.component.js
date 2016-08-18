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
var DOMPropertiesComponent = (function () {
    function DOMPropertiesComponent() {
        this.mylink = 'http://www.cnn.com';
    }
    DOMPropertiesComponent.prototype.ClickMe = function ($event) {
        alert("Click");
        console.log($event);
    };
    DOMPropertiesComponent = __decorate([
        core_1.Component({
            selector: "dom-properties",
            template: "\n    <h3>DOM Property binding</h3>\n   \n    <h4>Method One :  <a href={{mylink}} target=_blank_>MyLink - Use Interpolation</a></h4>\n    <h4>Method Two :  <a [href]=\"mylink\" target=_blank_>MyLink - Use Bracket  </a></h4>\n    <p>\n    <p>\n    <h3>DOM Event binding</h3>\n    <button (click) = \"ClickMe($event)\"> Click Me</button> \n"
        }), 
        __metadata('design:paramtypes', [])
    ], DOMPropertiesComponent);
    return DOMPropertiesComponent;
}());
exports.DOMPropertiesComponent = DOMPropertiesComponent;
//# sourceMappingURL=DOMProperties.component.js.map
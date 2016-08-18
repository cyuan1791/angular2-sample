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
// Import the core angular services.
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
        this.newString = 'my new string';
        // for custom events and property
        this.post = {
            title: 'Title',
            isStar: true
        };
    }
    AppComponent.prototype.onStarChange = function ($event) {
        console.log($event);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <hr>\n    <h2> ./DOM-Properties/DOMProperty.component.ts </h2>\n    <dom-properties></dom-properties>\n    <hr>\n    <h2> ./DirectiveProperties/DirectiveProperties.component.ts </h2>\n    <directive-properties></directive-properties>\n    <hr>\n    <h2> ./CustomProperty/CustomProperty.component.ts </h2>\n    <h4> Use default value</h4>\n    <custom-properties></custom-properties>\n    <hr>\n    <h4> Pass a new value via variable newString</h4>\n    <custom-properties [myString]=\"newString\"></custom-properties>\n    <hr>\n    <h2> ./CustomEvent/CustomEvent.component.ts </h2>\n    <h3> Custom Event and Property </h3>\n    <custom-event [isStar] = \"post.isStar\" (change) = \"onStarChange($event)\"></custom-event>\n"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
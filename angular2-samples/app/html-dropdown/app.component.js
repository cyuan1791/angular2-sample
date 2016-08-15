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
    // I initialize the component.
    function AppComponent() {
        this.bestFriend = null;
        this.friends = [
            {
                id: 1,
                name: "Joanna",
                avatar: "joanna-avatar.jpg"
            },
            {
                id: 2,
                name: "Kim",
                avatar: "kim-avatar.jpg"
            },
            {
                id: 3,
                name: "Sarah",
                avatar: "sarah-avatar.jpg"
            },
            {
                id: 4,
                name: "Tricia",
                avatar: "tricia-avatar.jpg"
            }
        ];
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // I clear the best-friend selection.
    AppComponent.prototype.clearSelection = function () {
        this.bestFriend = null;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            // I our view, notice that we are providing a TemplateRef as a child element of the
            // HtmlDropdownComponent. The dropdown component will query for this template and 
            // then use it to render both the option items as well as the root item.
            template: "\n\t\t<p>\n\t\t\t<strong>Best Friend</strong>: {{ bestFriend?.name || \"None selected\" }}\n\t\t\t&mdash;\n\t\t\t<a (click)=\"clearSelection()\">Clear selection</a>\n\t\t</p>\n\n\t\t<html-dropdown \n\t\t\t[items]=\"friends\" \n\t\t\t[(value)]=\"bestFriend\" \n\t\t\tplaceholder=\"Select Friend\">\n\n\t\t\t<template let-friend=\"item\">\n\t\t\t\t<img [src]=\"( './img/' + friend.avatar )\" />\n\t\t\t\t<span class=\"name\">\n\t\t\t\t\t{{ friend.name }}\n\t\t\t\t</span>\n\t\t\t</template>\n\n\t\t</html-dropdown>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map
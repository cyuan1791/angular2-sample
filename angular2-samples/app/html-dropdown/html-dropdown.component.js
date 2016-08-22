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
var core_2 = require("@angular/core");
var core_3 = require("@angular/core");
var core_4 = require("@angular/core");
var HtmlDropdownComponent = (function () {
    // I initialize the component.
    function HtmlDropdownComponent() {
        this.isShowingItems = false;
        this.valueChange = new core_3.EventEmitter();
    }
    // ---
    // PUBLIC METHODS.
    // ---
    // I hide the dropdown items.
    HtmlDropdownComponent.prototype.hideItems = function () {
        this.isShowingItems = false;
    };
    // I select the given item.
    // --
    // NOTE: Since this is a one-way data flow, the selection is being emitted rather
    // than applied directly to the value.
    HtmlDropdownComponent.prototype.selectItem = function (item) {
        this.hideItems();
        this.valueChange.emit(item);
    };
    // I show the dropdown items.
    HtmlDropdownComponent.prototype.showItems = function () {
        this.isShowingItems = true;
    };
    // I show or hide the dropdown items depending on their current visibility.
    HtmlDropdownComponent.prototype.toggleItems = function () {
        this.isShowingItems
            ? this.hideItems()
            : this.showItems();
    };
    HtmlDropdownComponent = __decorate([
        core_1.Component({
            selector: "html-dropdown",
            inputs: ["items", "value", "placeholder"],
            outputs: ["valueChange"],
            // Query for the template being provided by the calling context.
            queries: {
                itemTemplate: new core_2.ContentChild(core_4.TemplateRef)
            },
            host: {
                "[class.is-open]": "isShowingItems"
            },
            styles: ["\n\tul {\n\t\tlist-style: none;\n\t}\n\tli {\n\t\tborder: 1px solid black;\n\t}\n\t\n"],
            template: "\n\t\t<div (click)=\"toggleItems()\" class=\"dropdown-root\" [ngSwitch]=\"!! value\">\n\t\t\t<div *ngSwitchCase=\"true\" class=\"dropdown-item-content\">\n\t\t\t\t\n\t\t\t\t<template\n\t\t\t\t\t[ngTemplateOutlet]=\"itemTemplate\"\n\t\t\t\t\t[ngOutletContext]=\"{ item: value, index: -1 }\">\n\t\t\t\t</template>\n\n\t\t\t</div>\n\t\t\t<button *ngSwitchCase=\"false\" class=\"placeholder\">\n\t\t\t\t\n\t\t\t\t{{ placeholder || \"Nothing Selected\" }}\n\n\t\t\t</button>\n\t\t</div>\n\n\t\t<ul *ngIf=\"isShowingItems\" class=\"dropdown-items\">\n\t\t\t<li \n\t\t\t\t*ngFor=\"let item of items ; let index = index ;\" \n\t\t\t\t(click)=\"selectItem( item )\"\n\t\t\t\tclass=\"dropdown-item\">\n\n\t\t\t\t<div class=\"dropdown-item-content\">\n\t\t\t\t\n\t\t\t\t\t<template \n\t\t\t\t\t\t[ngTemplateOutlet]=\"itemTemplate\"\n\t\t\t\t\t\t[ngOutletContext]=\"{ item: item, index: index }\">\n\t\t\t\t\t</template>\n\n\t\t\t\t</div>\n\n\t\t\t</li>\n\t\t</ul>\n\t"
        }), 
        __metadata('design:paramtypes', [])
    ], HtmlDropdownComponent);
    return HtmlDropdownComponent;
}());
exports.HtmlDropdownComponent = HtmlDropdownComponent;
//# sourceMappingURL=html-dropdown.component.js.map
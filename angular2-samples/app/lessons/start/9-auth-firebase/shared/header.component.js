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
var auth_service_1 = require("./auth.service");
var HeaderComponent = (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
    }
    HeaderComponent.prototype.isAuth = function () {
        return this.authService.isAuthenticated();
    };
    HeaderComponent = __decorate([
        core_1.Component({
            selector: 'my-header',
            template: "\n       \n        <header>\n            <nav class=\"navbar navbar-default\">\n                <div class=\"container-fluid\">\n        \n                    <ul class=\"nav navbar-nav\">\n        \n                        <li><a [routerLink]=\"['signup']\" >Sign Up</a></li>\n                        <li><a [routerLink]=\"['signin']\">Sign In</a></li>\n                        <li><a [routerLink]=\"['protected']\">Protected</a></li>\n        \n                    </ul>\n                    <ul class=\"nav navbar-nav navbar-right\" *ngIf=\"isAuth()\">\n        \n                        <li><a>Logout</a></li>\n                    </ul>\n                </div><!-- /.container-fluid -->\n        \n            </nav>\n        \n        </header>\n    "
        }), 
        __metadata('design:paramtypes', [auth_service_1.AuthService])
    ], HeaderComponent);
    return HeaderComponent;
}());
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map
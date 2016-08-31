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
var forms_1 = require("@angular/forms");
var auth_service_1 = require('../shared/auth.service');
var SignupComponent = (function () {
    function SignupComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.error = false;
        this.errorMessage = '';
    }
    SignupComponent.prototype.onSignup = function () {
        this.authService.sigupUser(this.myForm.value);
    };
    SignupComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            email: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    this.isEmail
                ])],
            password: ['', forms_1.Validators.required],
            confirmPassword: ['', forms_1.Validators.compose([
                    forms_1.Validators.required,
                    this.isEqualPassword.bind(this)
                ])],
        });
    };
    SignupComponent.prototype.isEmail = function (control) {
        if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)) {
            return { noEmail: true };
        }
    };
    SignupComponent.prototype.isEqualPassword = function (control) {
        if (!this.myForm) {
            return { passwordsNotMatch: true };
        }
        if (control.value !== this.myForm.controls['password'].value) {
            return { passwordsNotMatch: true };
        }
    };
    SignupComponent = __decorate([
        core_1.Component({
            template: "\n        <h3>Please sign up to use all features</h3>\n        <form [formGroup]=\"myForm\" (ngSubmit)=\"onSignup()\">\n            <div class=\"input-group\">\n                <label for=\"email\">E-Mail</label>\n                <input formControlName=\"email\" type=\"email\" id=\"email\" #email>\n                <span *ngIf=\"!email.pristine && email.errors != null && email.errors['noEmail']\">Invalid mail address</span>\n                <!--<span *ngIf=\"email.errors['isTaken']\">This username has already been taken</span>-->\n            </div>\n            <div class=\"input-group\">\n                <label for=\"password\">Password</label>\n                <input formControlName=\"password\" type=\"password\" id=\"password\">\n            </div>\n            <div class=\"input-group\">\n                <label for=\"confirm-password\">Confirm Password</label>\n                <input formControlName=\"confirmPassword\" type=\"password\" id=\"confirm-password\" #confirmPassword>\n                <span *ngIf=\"!confirmPassword.pristine && confirmPassword.errors != null && confirmPassword.errors['passwordsNotMatch']\">Passwords do not match</span>\n            </div>\n            <button type=\"submit\" [disabled]=\"!myForm.valid\">Sign Up</button>\n        </form>\n\n    "
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, auth_service_1.AuthService])
    ], SignupComponent);
    return SignupComponent;
}());
exports.SignupComponent = SignupComponent;
//# sourceMappingURL=signup.component.js.map
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
var router_1 = require("@angular/router");
var core_1 = require('@angular/core');
var AuthService = (function () {
    function AuthService(router) {
        this.router = router;
    }
    ;
    AuthService.prototype.sigupUser = function (user) {
        //console.log(user);
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
            console.log(error);
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    };
    AuthService.prototype.signinUser = function (user) {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function (error) {
            // Handle Errors here.
            //var errorCode = error.code;
            //var errorMessage = error.message;
            // ...
            console.log(error);
        });
        this.router.navigate(['/protected']);
    };
    AuthService.prototype.isAuthenticated = function () {
        var user = firebase.auth().currentUser;
        if (user) {
            // User is signed in.
            //console.log('login a');
            return true;
        }
        else {
            // No user is signed in.
            //console.log('not login');
            return false;
        }
    };
    AuthService.prototype.logoutUser = function () {
        firebase.auth().signOut();
        console.log('logout');
        this.router.navigate(['/signin']);
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
"use strict";
var AuthService = (function () {
    function AuthService() {
    }
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
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
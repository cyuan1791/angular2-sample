"use strict";
var AuthService = (function () {
    function AuthService() {
    }
    AuthService.prototype.sigupUser = function (user) {
        console.log(user);
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    };
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map
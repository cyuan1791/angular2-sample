"use strict";
var router_1 = require("@angular/router");
var signup_component_1 = require("./unprotected/signup.component");
var signin_component_1 = require("./unprotected/signin.component");
var protected_component_1 = require("./protected/protected.component");
var auth_guard_1 = require("./shared/auth.guard");
var APP_ROUTES = [
    { path: '', redirectTo: '/signup', pathMatch: 'full' },
    { path: 'signup', component: signup_component_1.SignupComponent },
    { path: 'signin', component: signin_component_1.SigninComponent },
    { path: 'protected', component: protected_component_1.ProtectedComponent, canActivate: [auth_guard_1.AuthGuard] }
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map
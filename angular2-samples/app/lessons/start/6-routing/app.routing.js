"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require("./home.component");
var first_component_1 = require("./first.component");
var second_component_1 = require("./others/second.component");
var third_component_1 = require("./others/third.component");
var APP_ROUTES = [
    { path: 'SecondComponent', component: second_component_1.SecondComponent },
    { path: 'FirstComponent', component: first_component_1.FirstComponent },
    { path: 'ThirdComponent', component: third_component_1.ThirdComponent },
    { path: '', component: home_component_1.HomeComponent },
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map
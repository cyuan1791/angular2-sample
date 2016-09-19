"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
//import {platformBrowser} from '@angular/platform-browser';
//import { AppModule } from './lessons/start/1-hello-world/app.module';
//import { AppModule } from './lessons/start/2-fisrt-component/app.module';
//import { AppModule } from './lessons/start/3-multi-component/app.module';
//import { AppModule } from './lessons/start/4-ng-content/app.module';
//import { AppModule } from './lessons/start/5-property-event-binding/app.module';
//import { AppModule } from './lessons/start/6-routing/app.module';
//import { AppModule } from './lessons/start/7-shared-data-service/app.module';
//import { AppModule } from './lessons/start/8-form/app.module';
//import { AppModule } from './lessons/start/8-form-validating/app.module';
//import { AppModule } from './lessons/start/9-auth-firebase/app.module';
//import { AppModule } from './lessons/start/10-pipes/app.module';
//import { AppModule } from './lessons/start/11-http/app.module';
//import { AppModule } from './lessons/start/12-redux-counter/app.module';
var app_module_1 = require('./redux/todo-list/app.module');
// Onle one import AddModule at a time
// After change, do npm start
// for html-dropdown sample
//import { AppModule } from './html-dropdown/app.module';
// lesson for class and event binding
//import { AppModule } from './lessons/binding/property-event/app.module';
// lesson for custom event
//import { AppModule } from './lessons/binding/custom-event/app.module';
// rc 5 platformBrowserDynamic().bootstrapModule(AppModule);
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map
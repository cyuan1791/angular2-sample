"use strict";
// rc 5 import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';
var platform_browser_1 = require('@angular/platform-browser');
// Onle one import AddModule at a time
// After change, do npm start
// for html-dropdown sample
//import { AppModule } from './html-dropdown/app.module';
// lesson for class and event binding
//import { AppModule } from './lessons/binding/property-event/app.module';
// lesson for custom event
//import { AppModule } from './lessons/binding/custom-event/app.module';
// rc 5 platformBrowserDynamic().bootstrapModule(AppModule);
platform_browser_1.platformBrowser().bootstrapModuleFactory(MyAppModuleNgFactory);
//# sourceMappingURL=main.js.map
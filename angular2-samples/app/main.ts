import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';

//import { AppModule } from './lessons/start/1-hello-world/app.module';
//import { AppModule } from './lessons/start/2-fisrt-component/app.module';
//import { AppModule } from './lessons/start/3-multi-component/app.module';
//import { AppModule } from './lessons/start/4-ng-content/app.module';
//import { AppModule } from './lessons/start/5-property-event-binding/app.module';
//import { AppModule } from './lessons/start/6-routing/app.module';
//import { AppModule } from './lessons/start/7-shared-data-service/app.module';
//import { AppModule } from './lessons/start/8-form/app.module';
//import { AppModule } from './lessons/start/8-form-validating/app.module';
import { AppModule } from './lessons/start/9-auth-firebase/app.module';

// Onle one import AddModule at a time
// After change, do npm start
// for html-dropdown sample
//import { AppModule } from './html-dropdown/app.module';

// lesson for class and event binding
//import { AppModule } from './lessons/binding/property-event/app.module';

// lesson for custom event
//import { AppModule } from './lessons/binding/custom-event/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

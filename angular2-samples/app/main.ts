import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';

// for html-dropdown sample
//import { AppModule } from './html-dropdown/app.module';

// lesson for class and event binding
//import { AppModule } from './lessons/binding/property-event/app.module';

// lesson for custom event
import { AppModule } from './lessons/binding/custom-event/app.module';
platformBrowserDynamic().bootstrapModule(AppModule);

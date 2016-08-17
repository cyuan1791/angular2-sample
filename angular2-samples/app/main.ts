import { platformBrowserDynamic }    from '@angular/platform-browser-dynamic';

<<<<<<< HEAD

import { AppModule } from './lessons/start/1-hello-world/app.module';
//import { AppModule } from './lessons/start/2-fisrt-component/app.module';

=======
// Onle one import AddModule at a time
// After change, do npm start
>>>>>>> c515cfd77512280ee843ad3bbd6bcd90b1711fff
// for html-dropdown sample
//import { AppModule } from './html-dropdown/app.module';

// lesson for class and event binding
//import { AppModule } from './lessons/binding/property-event/app.module';

// lesson for custom event
//import { AppModule } from './lessons/binding/custom-event/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

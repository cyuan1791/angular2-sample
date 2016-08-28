// There are 5 files in this sample
// 1. app.component.ts
// 2. cmpa.component.ts
// 3. cmpb.component.ts
// 4. log.service.ts
// 5. data.service.ts
// ***********************************
// file app.component.ts
import { Component } from '@angular/core';
import { CmpAComponent } from './cmpa.component';
import { CmpBComponent } from './cmpb.component';
import { LogService } from './log.service';
import { DataService } from './data.service';

@Component({
    moduleId: module.id,
    selector: 'my-app',
    template: `
        <div>
        <ol>
        <li> Enter text and  Click Log will send text to conole</li>
        <li> Enter text and click Store will store into an array. Click Refresh Storage will display array content. Component A and B share the same storage array.</li>
        <li> Enter text and click Send in Component A will send data to component B</li>
        </ol>
        </div>
        <cmpa></cmpa>
        <hr>
        <cmpb></cmpb>
        `,
         providers: [CmpAComponent, CmpBComponent, LogService, DataService]
})
export class AppComponent { }

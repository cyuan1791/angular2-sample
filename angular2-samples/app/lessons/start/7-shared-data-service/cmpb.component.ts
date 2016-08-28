import { Component } from '@angular/core';
import { LogService } from './log.service';
import { DataService } from './data.service';

// Enter test at input and click log, will send it to console log
@Component({
    moduleId: module.id,
    selector: 'cmpb',
    template: `
    <div>
      <input type='text' #input>
      <button (click)='onLog(input.value)'>Log</button>
      <button (click)='onStore(input.value)'>Store</button>
      <div>
        <button (click)='onGet()'> Refresh Storage</button>
        <ul><li *ngFor='let item of items'>{{item}}</li></ul>
      </div>
    </div>,
`
})
export class CmpBComponent {
    value='';
    items: string[] = [];
    constructor (private logService: LogService, private dataService: DataService) {}
    onLog(value: string) {
       this.logService.writeToLog(value);
    }
    onStore(value: string) {
      this.dataService.addData(value);
    }
    onGet() {
        this.items = this.dataService.getData();
    }
}
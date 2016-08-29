// ***********************************
// file data.service.ts
import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';

// for pushData, so Component B could subscribe
@Injectable()

export class DataService {
   pushdata = new EventEmitter<string>();
   private data: string[] = [];

   constructor(private logService: LogService){};

   addData(input: string) {
      this.data.push(input);
      this.logService.writeToLog('Saved item: ' + input);
   }
   getData() {
       return this.data;
   }
   pushData(value: string) {
       this.pushdata.emit(value);
       console.log('pushData:' + value);
   }
}
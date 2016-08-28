// ***********************************
// file data.service.ts
import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class DataService {
   private data: string[] = [];

   constructor(private logService: LogService){};

   addData(input: string) {
      this.data.push(input);
      this.logService.writeToLog('Saved item: ' + input);
   }
   getData() {
       return this.data;
   }
}
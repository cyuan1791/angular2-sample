// ***********************************
// file data.service.ts
export class DataService {
   private data: string[] = []
   addData(input: string) {
      this.data.push(input);
   }
   getData() {
       return this.data;
   }
}
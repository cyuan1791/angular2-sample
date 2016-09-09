import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getData() {
    return this.http.get('https://httpsampe.firebaseio.com/title.json')
      .map((response: Response) => response.json());
  }

  sendData(user: any) {
    const body = JSON.stringify(user);
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('https://httpsampe.firebaseio.com/data.json', body, {
      headers: headers
    })
      .map((data: Response) => data.json())
      .catch(this.handleError);
  }

  getOwnData() {
    return this.http.get('https://httpsampe.firebaseio.com/data.json')
      .map((response: Response) => response.json());
  }

  private handleError (error: any) {
    console.log(error);
    return Observable.throw(error.json());
  }
}

import { Component } from '@angular/core';


@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  styles: [`
    .pipes {
      margin: 32px;
      padding: 32px;
    }
  `]
})
export class AppComponent {
  myValue = 'lowercase';
  myDate = new Date(2016,5,24);
  values = ['Milk', 'Bread', 'Beans'];
  asyncValue = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Data is here!'), 2000);
  });
}

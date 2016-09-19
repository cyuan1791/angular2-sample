
import {Component} from '@angular/core';

import {TodoStore} from './store';

@Component({
  selector: 'my-app',
  template: `
    <Header></Header>
    <add-todo></add-todo>
    <TodoList [todos]="todos"></TodoList>
  `
})
export class AppComponent {
  store = TodoStore;
  todos = this.store.getState();
  
  constructor () {
    this.store.subscribe(() => {
      this.todos = this.store.getState();

    })
  }
}

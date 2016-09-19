// AddTodo (components/addTodo.ts)
import {Component, Output, EventEmitter} from '@angular/core';

import {addTodo} from '../store';

@Component({
  selector: 'AddTodo',
  template: `
    <form (submit)="addTodo(newTodo)" class="panel panel-default">
      <input name="newTodo" class="form-control" [(ngModel)]="newTodo"
       />
    </form>
  `
})
export class AddTodo {
  addTodo = addTodo;
}
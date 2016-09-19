// TodoList (components/todoList.ts)
import {Component, Input} from '@angular/core';
import {Todo} from './todo';

// 
@Component({
  selector: 'TodoList',
  template: `
    <ul class="list-group">
     <Todo *ngFor='let p_todo of todos; let i=index' [index] ="i" [todo]="p_todo"></Todo>

    </ul>
  `
})
export class TodoList {
  @Input() todos;
}


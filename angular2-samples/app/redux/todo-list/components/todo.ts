// Todo (components/todo.ts)
import {Component, Input} from '@angular/core';
import {toggleTodo} from '../store';



//*ngIf="todo|json"
    
@Component({
  selector: 'Todo',
  template: `

    <li *ngIf="todo|json" [ngClass]="{completed: todo.completed}"
      (click)="toggleTodo(index)"
      class="list-group-item">
      {{index}} - {{todo.title}}
    </li>
  `
})
export class Todo {
  @Input() todo;
  @Input() index;
  
  // Pass through to the TodoStore
  toggleTodo = toggleTodo;
}
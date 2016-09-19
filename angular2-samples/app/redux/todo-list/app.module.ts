import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent} from './app.component';
import { AddTodo } from './models/addTodo';
import { TodoList } from './components/todoList';
import { Header } from './components/header';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { Todo } from './components/todo';
import { Add } from './components/add';




@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    declarations: [AppComponent, AddTodo, Add, Todo, TodoList, Header],
    bootstrap: [AppComponent]
})
export class AppModule{}


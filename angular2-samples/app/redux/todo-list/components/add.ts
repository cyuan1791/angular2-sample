import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {addTodo} from '../store';




@Component({
    moduleId: module.id,
    selector: 'add-todo',
    template:
`
<form [formGroup]='myForm' (ngSubmit)='onSubmit()'>
  <div class='form-group'  >
    <label for='newtodo'>Add a new todo </label>
    <input 
    type='text' 
    class='form-control' 
    id='newtodo'
    formControlName='newtodo'
    >


  <button type='submit' class='btn btn-default'>Submit</button>
  </div>
</form>
`

})
export class Add implements OnInit {
    myForm: FormGroup;

    constructor() {
       
        this.myForm = new FormGroup({
            'newtodo': new FormControl()
            })
    }

    onSubmit() {
        addTodo(this.myForm.value['newtodo']);
        console.log(this.myForm);
        console.log(this.myForm.valid);
        console.log(this.myForm.value['newtodo']);
    }
    ngOnInit() { }
}
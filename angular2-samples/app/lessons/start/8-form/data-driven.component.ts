import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    moduleId: module.id,
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
    myForm: FormGroup;

    constructor() {
        this.myForm = new FormGroup({
            'username': new FormControl(),
            'email' : new FormControl(),
            'password' : new FormControl()
        })
     }
     onSubmit() {
         console.log(this.myForm);
     }

}
import { Component } from '@angular/core';
import {
  FormGroup,
  FormControl,
  //REACTIVE_FORM_DIRECTIVES,
  Validators,
  FormBuilder,
  FormArray
} from "@angular/forms";
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'data-driven',
    templateUrl: 'data-driven.component.html'
})
export class DataDrivenComponent {
    myForm: FormGroup;

      genders = [
    'male',
    'female'
  ];

  constructor(private formBuilder: FormBuilder) {

    this.myForm = formBuilder.group({
      'userData': formBuilder.group({
        'username': ['Mark', [Validators.required, this.exampleValidator]],
        'email': ['', [
          Validators.required,
          Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
        ]]
      }),
      'password': ['', Validators.required],
      'gender': ['male'],
      'hobbies': formBuilder.array([
        ['Cooking', Validators.required, this.asyncExampleValidator]
      ])
    });

    this.myForm.statusChanges.subscribe(
      (data: any) => console.log(data)
    );
  }
onAddHobby() {
    //(<FormArray>this.myForm.find('hobbies')).push(new FormControl('', Validators.required, this.asyncExampleValidator));
  }

  onSubmit() {
    console.log(this.myForm);
  }

  exampleValidator(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Example') {
      return {example: true};
    }
    return null;
  }

  asyncExampleValidator(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>(
      (resolve, reject) => {
        setTimeout(() => {
          if (control.value == 'Example') {
            resolve({ 'invalid': true });
          } else {
            resolve(null);
          }
        }, 1500);
      }
    );
    return promise;
  }

    
  


}

import { Component,Input } from "@angular/core";

@Component({
	selector: "two-way-binding",
	template: `
    <input type="text"  [(ngModel)] = "title">
    <input type="text"  [(ngModel)] = "title">
`
})

export class TwoWayBindingComponent {
    title = 'Hello World';
}
    

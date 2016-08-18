import { Component } from "@angular/core";

@Component({
	selector: "second-component",
	template: `
    <ng-content></ng-content>
    <h2>Hello world from second component</h2>
`
})
export class SecondComponent {
}


// Import the core angular services.
import { Component } from "@angular/core";


@Component({
	selector: "my-app",
	template: `
    <h1> Property and Event Binding</h1>
    <hr>
    <h3>DOM property binding</h3>
    <h4>./DOM-Property/DOMProperty.component.ts</h4>
    <dom-properties></dom-properties>
    <hr>
    <h3> Directive property binding</h3>
    <h4>./DirectiveProperty/DirectiveProperty.component.ts</h4>
    <directive-properties></directive-properties>
    <hr>
    <h3> Custom property binding</h3>
    <h4>./CustomProperty/CustomProperty.component.ts</h4>
    <h4> Use default value</h4>
    <custom-properties></custom-properties>
    <hr>
    <h4> Pass a new value via variable newString</h4>
    <custom-properties [myString]="newString"></custom-properties>
    <hr>
    <h3> Custom event and property binding </h3>
    <h4>./CustomEvent/CustomEvent.component.ts</h4>
    <custom-event [isStar] = "post.isStar" (change) = "onStarChange($event)"></custom-event>
    <hr>
    <h3> Two way binding </h3>
    <h4>./TwoWayBinding/TwoWayBinding.component.ts</h4>
    <two-way-binding> </two-way-binding>
`,
    styles: [`
        h3 {
            color: red;
        }
`]
})
export class AppComponent {
    newString = 'my new string'
   
    // for custom events and property
    post = {
        title: 'Title',
        isStar: true
    }
    onStarChange($event) {
        console.log($event);
    }
}

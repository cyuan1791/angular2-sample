
// Import the core angular services.
import { Component } from "@angular/core";


@Component({
	selector: "my-app",
	template: `
    <hr>
    <h2> ./DOM-Properties/DOMProperty.component.ts </h2>
    <dom-properties></dom-properties>
    <hr>
    <h2> ./DirectiveProperties/DirectiveProperties.component.ts </h2>
    <directive-properties></directive-properties>
    <hr>
    <h2> ./CustomProperty/CustomProperty.component.ts </h2>
    <h4> Use default value</h4>
    <custom-properties></custom-properties>
    <hr>
    <h4> Pass a new value via variable newString</h4>
    <custom-properties [myString]="newString"></custom-properties>
    <hr>
    <h2> ./CustomEvent/CustomEvent.component.ts </h2>
    <h3> Custom Event and Property </h3>
    <custom-event [isStar] = "post.isStar" (change) = "onStarChange($event)"></custom-event>
`
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

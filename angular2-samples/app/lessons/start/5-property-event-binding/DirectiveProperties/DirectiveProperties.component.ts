import { Component } from "@angular/core";

@Component({
	selector: "directive-properties",
	template: `
    <h3>Angular2 Directive Properties Binding</h3>
    <h4 [ngClass] = "{BlueFont: true}">Use ngClass Directive binding</h4>
`,
    styles: [`
.BlueFont {
   color: blue;
}
`]
})

export class DirectivePropertiesComponent {
}
    

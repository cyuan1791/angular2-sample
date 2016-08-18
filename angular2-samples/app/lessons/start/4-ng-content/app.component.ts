
// Import the core angular services.
import { Component } from "@angular/core";


@Component({
	selector: "my-app",
	template: `
    <first-component></first-component>
    <second-component><h2>From app.component second</h2></second-component>
    <third-component><h2>From app.component third</h2></third-component>
`
})
export class AppComponent {
}

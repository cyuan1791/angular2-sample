
// Import the core angular services.
import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from "@angular/router";


@Component({
	selector: "my-app",
	directives: [ROUTER_DIRECTIVES],
	template: `
    <hr>
	<a [routerLink] = "['']"> Home </a>
	<a [routerLink] = "['FirstComponent']"> FirstComponent </a>
	<a [routerLink] = "['SecondComponent']"> SecondComponent </a>
	<a [routerLink] = "['ThirdComponent']"> ThirdComponent </a>
    <hr>
    <router-outlet> </router-outlet>
`
})
export class AppComponent {
}

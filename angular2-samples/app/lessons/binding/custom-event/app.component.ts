
// Import the core angular services.
import { Component } from "@angular/core";


@Component({
	selector: "my-app",
	template: `
    <lesson [isStar] = "post.isStar" (change) = "onStarChange($event)"></lesson>
`
})
export class AppComponent {
    post = {
        title: 'Title',
        isStar: true
    }
    onStarChange($event) {
        console.log($event);
    }
}

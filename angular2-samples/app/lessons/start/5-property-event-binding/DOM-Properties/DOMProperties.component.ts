import { Component } from "@angular/core";

@Component({
	selector: "dom-properties",
	template: `
    <h4>Method One :  <a href={{mylink}} target=_blank_>MyLink - Use Interpolation</a></h4>
    <h4>Method Two :  <a [href]="mylink" target=_blank_>MyLink - Use Bracket  </a></h4>
    <p>
    <p>
    <h3>DOM Event binding</h3>
    <button (click) = "ClickMe($event)"> Click Me</button> 
`
})

export class DOMPropertiesComponent {
    mylink = 'http://www.cnn.com';
    
    ClickMe($event) {
        alert("Click");
        console.log($event);
    }
}
    

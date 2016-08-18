import { Component,Input } from "@angular/core";

@Component({
	selector: "custom-properties",
	template: `
    {{myString}}
`
})

export class CustomPropertiesComponent {
    @Input() myString: string = 'default string';
}
    

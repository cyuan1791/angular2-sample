import { Component } from "@angular/core";

@Component({
	selector: "lesson",
    //
    // (click)="onClick($event)"
    // on-click="onClick($event)"
    // (click) and on-click are identical
	template: `
        Lesson for class and event binding : Click the star 
        <i class="glyphicon"
            (click)="onClick($event)"
            [class.glyphicon-star]="isStar"
            [class.glyphicon-star-empty]="!isStar"
        ></i>
`
})
export class LessonComponent {
    isStar = true;
	public onClick($event) : void {
        if (this.isStar) {
           this.isStar = false;
        } else {
           this.isStar = true;
        }
        console.log('click', $event);
	}
}

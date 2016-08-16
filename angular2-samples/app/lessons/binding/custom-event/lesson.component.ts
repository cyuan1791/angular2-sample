import { Component, Input,Output, EventEmitter } from "@angular/core";

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
    @Input() isStar = true;
    @Output() change = new EventEmitter();

	public onClick($event) : void {
        this.isStar = !this.isStar;
        this.change.emit({newValue: this.isStar});
        console.log('click', $event);
	}
}

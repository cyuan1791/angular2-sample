import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent} from './app.component';
import { LessonComponent } from "./lesson.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, LessonComponent],
    bootstrap: [AppComponent]
})
export class AppModule{}


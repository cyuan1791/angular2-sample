import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent} from './app.component';
import { HtmlDropdownComponent } from "./html-dropdown.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, HtmlDropdownComponent],
    bootstrap: [AppComponent]
})
export class AppModule{}


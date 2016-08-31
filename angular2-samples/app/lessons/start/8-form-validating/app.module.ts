import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";

import { AppComponent} from './app.component';
import { DataDrivenComponent } from "./data-driven.component";



@NgModule({
    imports: [BrowserModule, ReactiveFormsModule],
    declarations: [AppComponent, DataDrivenComponent],
    bootstrap: [AppComponent]
})
export class AppModule{}


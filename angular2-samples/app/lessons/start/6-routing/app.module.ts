import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home.component";
import { FirstComponent } from "./first.component";
import { SecondComponent} from "./others/second.component";
import { ThirdComponent } from "./others/third.component";
import { routing } from "./app.routing";

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [AppComponent, HomeComponent, FirstComponent, SecondComponent, ThirdComponent],
    bootstrap: [AppComponent]
})
export class AppModule{}


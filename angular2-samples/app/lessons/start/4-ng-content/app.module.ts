import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FirstComponent } from "./first.component";
import { SecondComponent} from "./others/second.component";
import { ThirdComponent } from "./others/third.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [AppComponent, FirstComponent, SecondComponent, ThirdComponent],
    bootstrap: [AppComponent]
})
export class AppModule{}


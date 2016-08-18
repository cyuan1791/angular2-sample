import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { DOMPropertiesComponent } from "./DOM-Properties/DOMProperties.component";
import { DirectivePropertiesComponent } from "./DirectiveProperties/DirectiveProperties.component";
import { CustomPropertiesComponent } from "./CustomProperties/CustomProperties.component";
import { CustomEventComponent } from "./CustomEvent/CustomEvent.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent, 
        DOMPropertiesComponent, 
        DirectivePropertiesComponent,
        CustomPropertiesComponent,
        CustomEventComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule{}


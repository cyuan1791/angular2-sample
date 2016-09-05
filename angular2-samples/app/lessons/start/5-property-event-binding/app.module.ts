import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

// for two-way binding
import { FormsModule }   from '@angular/forms';

import { DOMPropertiesComponent } from "./DOM-Properties/DOMProperties.component";
import { DirectivePropertiesComponent } from "./DirectiveProperties/DirectiveProperties.component";
import { CustomPropertiesComponent } from "./CustomProperties/CustomProperties.component";
import { CustomEventComponent } from "./CustomEvent/CustomEvent.component";
import { TwoWayBindingComponent } from "./TwoWayBinding/TwoWayBinding.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [
        AppComponent, 
        DOMPropertiesComponent, 
        DirectivePropertiesComponent,
        CustomPropertiesComponent,
        CustomEventComponent,
        TwoWayBindingComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule{}

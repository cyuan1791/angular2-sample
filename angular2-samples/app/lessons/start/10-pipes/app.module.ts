import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';

import { AppComponent }   from './app.component';
import { FilterPipe } from "./filter.pipe";
import { DoublePipe } from "./double.pipe";


@NgModule({
    declarations: [AppComponent, FilterPipe, DoublePipe],
    imports: [BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
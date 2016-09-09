import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }   from './app.component';
import { HttpService } from "./http.service";


@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, HttpModule],
    bootstrap: [AppComponent],
    providers: [HttpService]
})
export class AppModule {}
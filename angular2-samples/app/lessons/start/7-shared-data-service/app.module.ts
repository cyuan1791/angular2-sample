import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CmpAComponent } from './cmpa.component';
import { CmpBComponent } from './cmpb.component';

//import { routing } from './app.routing'; //TODO: Create app.routing

@NgModule({
    imports: [
        BrowserModule,
    //trouting,
    ],
    declarations: [AppComponent,CmpAComponent, CmpBComponent],
    providers: [/* TODO: Providers go here */],
    bootstrap: [AppComponent],
})
export class AppModule { }
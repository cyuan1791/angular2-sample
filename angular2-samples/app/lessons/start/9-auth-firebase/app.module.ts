import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
//import { ROUTER_DIRECTIVES } from '@angular/router';

import { AppComponent }   from './app.component';
import { HeaderComponent } from "./shared/header.component";
import { SigninComponent } from "./unprotected/signin.component";
import { SignupComponent } from "./unprotected/signup.component";
import { ProtectedComponent } from "./protected/protected.component";
import { routing} from "./app.routing";
import { AuthService} from "./shared/auth.service";


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        SigninComponent,
        SignupComponent,
        ProtectedComponent
    ],
    providers: [ AuthService ],
    imports: [BrowserModule, HttpModule, routing, ReactiveFormsModule],
    bootstrap: [AppComponent]
})
export class AppModule {}
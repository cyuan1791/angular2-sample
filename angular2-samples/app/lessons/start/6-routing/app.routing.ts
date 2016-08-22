import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from "./home.component";
import { FirstComponent } from "./first.component";
import { SecondComponent} from "./others/second.component";
import { ThirdComponent } from "./others/third.component";

const APP_ROUTES: Routes = [
	{ path: 'SecondComponent', component: SecondComponent },
	{ path: 'FirstComponent', component: FirstComponent },
	{ path: 'ThirdComponent', component: ThirdComponent },
	{ path: '', component: HomeComponent },
];


export const routing = RouterModule.forRoot(APP_ROUTES);

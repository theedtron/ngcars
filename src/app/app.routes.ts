import {Routes, RouterModule} from '@angular/router';
import {RegUserComponent} from "./reg-user/reg-user.component";
import {RegUserFormComponent} from "./reg-user/reg-user-form/reg-user-form.component";
import {CarsComponent} from "./cars/cars.component";
import {HomeComponent} from "./home/home.component";
import {CdkexamleComponent} from "./cdkexamle/cdkexamle.component";

const routes: Routes = [
    {path: 'regs', component: RegUserComponent},
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'regs/new', component: RegUserFormComponent},
    {path: 'cars', component: CarsComponent},
    {path: 'home', component: HomeComponent},
    {path: 'cdkex', component: CdkexamleComponent}
];

export const appRouterModule = RouterModule.forRoot(routes);
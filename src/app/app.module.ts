import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import {appRouterModule} from "./app.routes";
import { RegUserFormComponent } from './reg-user/reg-user-form/reg-user-form.component';
import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    RegUserComponent,
    RegUserFormComponent,
    CarsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

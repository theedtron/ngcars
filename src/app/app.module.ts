import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RegUserComponent } from './reg-user/reg-user.component';
import {appRouterModule} from "./app.routes";
import { RegUserFormComponent } from './reg-user/reg-user-form/reg-user-form.component';
import { CarsComponent } from './cars/cars.component';
import { HomeComponent } from './home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdButtonModule, MdCheckboxModule, MdMenuModule, MdCardModule, MdToolbarModule,
    MdIconModule
} from '@angular/material';
import { NavComponent } from './nav/nav.component';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    RegUserComponent,
    RegUserFormComponent,
    CarsComponent,
    HomeComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule,
    [MdButtonModule, MdCheckboxModule, MdMenuModule, MdCardModule, MdToolbarModule, MdIconModule],
    [BrowserAnimationsModule],

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

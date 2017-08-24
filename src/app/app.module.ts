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
    MdIconModule, MdListModule
} from '@angular/material';
import { NavComponent } from './nav/nav.component';
import 'hammerjs';
import {CarApiService} from "./car-api.service";
import {HttpModule} from "@angular/http";

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
    HttpModule,
    [MdButtonModule, MdCheckboxModule, MdMenuModule, MdCardModule, MdToolbarModule, MdIconModule, MdListModule],
    [BrowserAnimationsModule],

  ],
  providers: [CarApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

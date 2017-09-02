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
    MdIconModule, MdListModule, MdTableModule, MdPaginatorModule, MdInputModule, MdSidenavModule
} from '@angular/material';
import { NavComponent } from './nav/nav.component';
import 'hammerjs';
import {CarApiService} from "./services/car-api.service";
import {HttpModule} from "@angular/http";
import {CdkTableModule} from "@angular/cdk";
import {UsersApiService} from "./services/users-api.service";
import {FormsModule, ReactiveFormsModule, FormGroup} from "@angular/forms";
import {FlexLayoutModule} from "@angular/flex-layout";
import { CdkexamleComponent } from './cdkexamle/cdkexamle.component';

@NgModule({
  declarations: [
    AppComponent,
    RegUserComponent,
    RegUserFormComponent,
    CarsComponent,
    HomeComponent,
    NavComponent,
    CdkexamleComponent
  ],
  imports: [
    BrowserModule,
    appRouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    [MdButtonModule, MdCheckboxModule, MdMenuModule, MdCardModule, MdToolbarModule, MdIconModule, MdListModule, MdTableModule, CdkTableModule, MdPaginatorModule, MdInputModule,MdSidenavModule],
    [BrowserAnimationsModule],
    FlexLayoutModule

  ],
  providers: [CarApiService,UsersApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

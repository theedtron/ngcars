import { Component, OnInit } from '@angular/core';
import {CarApiService} from "../services/car-api.service";
import {Observable} from "rxjs";
import {CarsModel} from "../models/carsModel";
import {MdPaginator} from "@angular/material";
import {CarDataSource} from "../dataSources/carDataSource";
import {CarDatabase} from "../dataSources/carDatabase";

@Component({
    selector: 'app-cars',
    templateUrl: './cars.component.html',
    styleUrls: ['./cars.component.css'],
    providers: [CarApiService, MdPaginator]
})
export class CarsComponent implements OnInit {

    all_cars: any;
    dataSource: CarDataSource | null;

    constructor(public carsapi: CarApiService, public paginator: MdPaginator) { }

    ngOnInit() {
        this.carsapi.getCars()
            .subscribe(data => {
                console.log(data);
                this.all_cars = data;
            });

    }

}

import { Component, OnInit } from '@angular/core';
import {CarApiService} from "../services/car-api.service";
import {MdPaginator} from "@angular/material";
import {CarsDataSource} from "./cars.datasource";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [CarApiService, MdPaginator]
})
export class CarsComponent implements OnInit {

  all_cars: any;
  dataSource: CarsDataSource | null;
  displayedColumns = ['id', 'title', 'body', 'actions'];

  constructor(public carsapi: CarApiService, public paginator: MdPaginator) {

  }

  ngOnInit() {
    this.dataSource = new CarsDataSource(this.carsapi);
    // this.carsapi.getCars()
    //     .subscribe(data => {
    //         console.log(data);
    //         this.all_cars = data;
    //     });

  }

}

import { Component, OnInit } from '@angular/core';
import {CarApiService} from "../car-api.service";

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css'],
  providers: [CarApiService]
})
export class CarsComponent implements OnInit {

    all_cars: any;

  constructor(public carsapi: CarApiService) { }

  ngOnInit() {
    this.carsapi.getCars()
        .subscribe(data => {
            console.log(data);
            this.all_cars = data;
        });
  }

}

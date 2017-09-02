import {DataSource} from "@angular/cdk";
import {CarsModel} from "../models/carsModel";
import {CarApiService} from "../services/car-api.service";
import {Observable} from "rxjs";

export class CarsDataSource extends DataSource<CarsModel>{
    constructor(private carsapi: CarApiService) {
        super();
    }

    connect(): Observable<CarsModel[]> {
        console.log('connect');
        return this.carsapi.getCars();
    }

    disconnect() {}
}

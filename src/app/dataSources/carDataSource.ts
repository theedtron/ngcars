import {DataSource} from "@angular/cdk";
import {Observable} from "rxjs";
import {CarsModel} from "../models/carsModel";
import {CarDatabase} from "./carDatabase";

export class CarDataSource extends DataSource<any> {

    constructor(private carDb: CarDatabase  ) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<CarsModel[]> {
        return this.carDb.dataChange;
    }

    disconnect() { }
}


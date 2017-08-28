import {BehaviorSubject} from "rxjs";
import {CarsModel} from "../models/carsModel";
import {CarApiService} from "../services/car-api.service";

export class CarDatabase {
    public dataChange: BehaviorSubject<CarsModel[]> = new BehaviorSubject<CarsModel[]>([]);
    get data(): CarsModel[] { return this.dataChange.value }

    constructor(carsApi: CarApiService) {
        carsApi.getCars().subscribe(data => this.dataChange.next(data));
    }
}
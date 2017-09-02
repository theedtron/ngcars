import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {CarsModel} from "../models/carsModel";
// import {ApiRoutes} from "./models/apiRoutes";

@Injectable()
export class CarApiService {

    private resource: string = 'https://jsonplaceholder.typicode.com/';

    constructor(public http: Http) { }

    getCars(): Observable<CarsModel[]>{
        return this.http.get(this.resource + 'posts')
            .map(res => res.json())
            .catch(err => Observable.throw(err));
    }
}

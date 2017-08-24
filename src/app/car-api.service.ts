import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
// import {ApiRoutes} from "./models/apiRoutes";

@Injectable()
export class CarApiService {

    private resource: string = 'https://jsonplaceholder.typicode.com/';

    constructor(public http: Http) { }

    getCars(){
        return this.http.get(this.resource + 'posts')
            .map(res => res.json())
    }
}

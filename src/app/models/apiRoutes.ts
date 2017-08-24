import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ApiRoutes{

    private resource: string = 'https://jsonplaceholder.typicode.com/';

    constructor (public http: Http){

    }

    getCarsUrl(){
        return this.resource + 'posts';
    }
}
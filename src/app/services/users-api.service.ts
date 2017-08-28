import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class UsersApiService {

  private resource: string = 'https://jsonplaceholder.typicode.com/';

  constructor(public http: Http) { }

  getUsers(){
    return this.http.get(this.resource + 'users')
        .map(res => res.json())
  }

  addUser(user){
    return this.http.post(this.resource + 'users', JSON.stringify(user))
        .map(res => res.json());
  }

}

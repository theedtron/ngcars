import { Component, OnInit } from '@angular/core';
import {UsersApiService} from "../services/users-api.service";

@Component({
  selector: 'app-reg-user',
  templateUrl: './reg-user.component.html',
  styleUrls: ['./reg-user.component.css']
})
export class RegUserComponent implements OnInit {

    all_users: any;
  constructor(public userApi: UsersApiService) { }

  ngOnInit() {
    this.userApi.getUsers()
        .subscribe(data => {
            console.log(data);
            this.all_users = data;
        })
  }

}

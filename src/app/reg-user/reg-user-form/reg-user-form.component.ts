import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import {UsersApiService} from "../../services/users-api.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-reg-user-form',
  templateUrl: './reg-user-form.component.html',
  styleUrls: ['./reg-user-form.component.css']
})
export class RegUserFormComponent implements OnInit {

  private form : FormGroup;

  constructor(public formBuilder: FormBuilder, public userApi: UsersApiService, public router: Router) {
    this.form = formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', Validators.required],
      phone: [],
      address: [],
      street: ['', Validators.minLength(3)],
      suite: [],
      city: ['', Validators.maxLength(30)],
      zipcode: ['', Validators.pattern('^([0-9]){5}([-])([0-9]){4}$')]

    });
  }

  ngOnInit() {
  }

  save(){
    var res;
    var userval = this.form.value;
    res = this.userApi.addUser(userval);

    res.subscribe(data => this.router.navigate(['regs']));
  }

}

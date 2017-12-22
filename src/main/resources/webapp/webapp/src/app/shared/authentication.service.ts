import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {User} from "./user";
import {ApiService} from "../api.service";

@Injectable()
export class AuthenticationService {

  users = [
    new User(null,'admin@admin.com','adm9'),
    new User(null,'user1@gmail.com','a23')
  ];

  constructor(private _router: Router, private apiService: ApiService) { }

  login(user){

    return this.apiService.login(user);

  }

}

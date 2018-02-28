import {Injectable, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {User} from "../shared/user";
import {Emp} from "./emp";
import {Person} from "./person";
import {Observable} from "rxjs/Observable";
import {HttpResponse} from "@angular/common/http";

@Injectable()
export class UsersService implements OnInit {


  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
  }

  addUser(user: User, typeOfAccount: string){
      if(typeOfAccount === 'emp' || typeOfAccount === 'Company'){
        return this.apiService.addEmp(<Emp>user);
      }else{
        return this.apiService.addPerson(<Person>user)
      }
  }

  getUser(){
    return this.apiService.getUserData();
  }

}

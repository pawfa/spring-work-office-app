import {Injectable, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {User} from "../shared/user";
import {Emp} from "./emp";
import {Person} from "./person";

@Injectable()
export class UsersService implements OnInit {


  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
  }

  addUser(user: User, typeOfAccount: string){
      if(typeOfAccount === 'company'){
        this.apiService.addEmp(<Emp>user);
      }else{
        this.apiService.addPerson(<Person>user)
      }

  }
}

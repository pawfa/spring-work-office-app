import {Injectable, OnInit} from '@angular/core';
import {ApiService} from "../api.service";
import {User} from "../shared/user";
import {Emp} from "./emp";
import {Person} from "./person";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Subject} from "rxjs/Subject";

@Injectable()
export class UsersService implements OnInit {

  private userData = new Subject<User>();
  private userId = new Subject<number>();

  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
  }

  addUser(user: User, typeOfAccount: string) {
    if (typeOfAccount === 'emp' || typeOfAccount === 'Company') {
      return this.apiService.addEmp(<Emp>user);
    } else {
      return this.apiService.addPerson(<Person>user)
    }
  }

  getUser() {
    this.apiService.getUserData().subscribe(
      (data: User) => {
        this.userData.next(data)
      }
    );
    return this.userData.asObservable();
  }

  getUserId() {
    this.apiService.getUserData().subscribe(
      (data: User) => {
        this.userId.next(data.id)
      }
    );
    return this.userId.asObservable();
  }

}

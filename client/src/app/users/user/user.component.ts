import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {User} from "../../shared/user";
import {DataService} from "../../data.service";


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user =  new User();
  type: string;

  errorMessageResources = {
    email: {
      required: 'Email is required.',
      email: 'Email is invalid.',
    },
    password: {
      required: 'Password is required.',
    },
    companyName: {
      minlength:'Company name must be at least 2 characters long.'
    },
    firstName: {
      minlength:'First name must be at least 2 characters long.'
    },
    lastName: {
      minlength:'Last name must be at least 2 characters long.'
    },
  };

  constructor(private usersService: UsersService,
              private dataService: DataService) { }

  ngOnInit() {
    this.usersService.getUser().subscribe(
      (data: User) => {
        this.user = data;
        this.type = data.userType;
      }
    );
  }

  onSubmit(){
    this.usersService.addUser(this.user, this.type);
  }

}

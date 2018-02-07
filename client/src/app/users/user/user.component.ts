import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {Person} from "../person";
import {User} from "../../shared/user";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-person',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  disable = true;
  user =  new User();
  type: string;

  constructor(private usersService: UsersService) { }

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

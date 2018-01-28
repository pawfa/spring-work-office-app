import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {User} from "../../shared/user";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  user: User;
  typeOfAccunt: string;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit(submittedForm){
    console.log(submittedForm);
    if(submittedForm.invalid){
      return;
    }
    this.usersService.addUser(this.user,this.typeOfAccunt)
  }
}

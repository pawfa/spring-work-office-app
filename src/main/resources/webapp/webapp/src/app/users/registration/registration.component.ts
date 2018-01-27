import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";
import {User} from "../../shared/user";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  mainUser: User = new User();
  typeOfAccunt: string;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
  }

  onSubmit(submittedForm){
    console.log(submittedForm);
    if(submittedForm.invalid){
      return;
    }
    this.usersService.addUser(this.mainUser,this.typeOfAccunt)
  }
}

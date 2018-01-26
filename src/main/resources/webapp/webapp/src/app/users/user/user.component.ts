import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  disable = true;
  inputEmail: string = "test";
  inputPassword: string = "pass";
  inputCvDescription: string;

  constructor() { }

  ngOnInit() {
  }

  onSubmit(submittedForm){
    console.log(submittedForm);
    if(submittedForm.invalid){
      return;
    }
    // this.userService.addCharacter(submittedForm.value.name, submittedForm.value.side);
  }
}

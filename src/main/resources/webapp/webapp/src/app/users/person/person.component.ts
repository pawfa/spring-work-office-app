import { Component, OnInit } from '@angular/core';
import {UsersService} from "../users.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
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

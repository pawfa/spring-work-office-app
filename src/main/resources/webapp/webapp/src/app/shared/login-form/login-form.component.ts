import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  }

  loginUser(e){
    // let mail = e.elements[0];
    // let password = e.elements[1];
    // console.log(mail, password);
    console.log(e.elements);
  }


}

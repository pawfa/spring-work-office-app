import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {AuthenticationService} from "../authentication.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  private userModel = new User(null,null,null);
  private errorMsg : String;


  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  loginUser() {
    console.log(this.userModel.email);
    console.log(this.userModel.password)

    this.authService.login(this.userModel)
      .subscribe(
        () => {
          console.log("User is logged in");
        },
      (err) => this.errorMsg = err
      );
  }


}

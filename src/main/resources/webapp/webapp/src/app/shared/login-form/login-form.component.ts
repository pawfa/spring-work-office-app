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
  private loading = false;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {

    this.authService.logout();
  }

  loginUser() {
    this.authService.login(this.userModel);
      // .subscribe(
      //   (data) => {
      //     console.log("User is logged in"+data);
      //   },
      // (err) => this.errorMsg = err
      // );
  }


}

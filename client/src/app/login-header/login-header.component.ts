import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../shared/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../shared/user";
import {MzToastService} from 'ng2-materialize'
import {Observable} from "rxjs/Observable";
import {SnackService} from "../shared/snack.service";

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
})
export class LoginHeaderComponent implements OnInit {

  private userModel = new User();
  private error : string;
  private returnUrl;

  constructor(private authService: AuthenticationService,
              private router : Router,
              private route: ActivatedRoute,
              private snackService: SnackService){}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginUser(event) {

      if (event.valid) {
        this.authService.login(this.userModel).subscribe(response => {
            this.router.navigateByUrl(this.returnUrl);
          },
          (error) => {
            if (error.status == 401) {
              this.error = "Invalid username or password";
              this.snackService.openSnack(this.error);
            }
          });
      } else {
        this.error = "Invalid username or password";
        this.snackService.openSnack(this.error);
      }
  }
}

import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../shared/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../shared/user";

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
})
export class LoginHeaderComponent implements OnInit {

  private userModel = new User();
  private error : string;
  private loading = false;
  private returnUrl;

  constructor(private authService: AuthenticationService, private router : Router, private route: ActivatedRoute){}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginUser(event) {

    if(event.invalid){
      this.authService.login(this.userModel).subscribe(response => {
          if (response === true) {
            this.router.navigateByUrl(this.returnUrl);
          } else {
            this.error = 'Invalid username or password';
          }
        },
        (error) =>{
          if(error.status == 401){
            this.error = "Invalid username or password";
            this.loading = false;
          }
        });
    }else{
      this.error = "Invalid username or password";
    }

  }
//todo ng blur
  onFocus(){
    console.log(this.error);
    this.error ? '': this.error = "Invalid username or password";
  }
}

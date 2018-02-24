import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../shared/authentication.service";
import {ActivatedRoute, Router} from "@angular/router";
import {User} from "../shared/user";
import {MzToastService} from 'ng2-materialize'

@Component({
  selector: 'app-login-header',
  templateUrl: './login-header.component.html',
  styleUrls: ['./login-header.component.css']
})
export class LoginHeaderComponent implements OnInit {

  private userModel = new User();
  private error : string;
  private returnUrl;
  private focus :boolean = false;



  constructor(private authService: AuthenticationService, private router : Router, private route: ActivatedRoute, private toastService: MzToastService){}

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  loginUser(event) {

    if(event.valid){
      this.authService.login(this.userModel).subscribe(response => {
          if (response === true) {
            this.router.navigateByUrl(this.returnUrl);
          } else {
            this.error = 'Invalid username or password';
            this.openSnack();
          }
        },
        (error) =>{
          if(error.status == 401){
            this.error = "Invalid username or password";
            this.openSnack();
          }
        });
    }else{
      this.error = "Invalid username or password";
      this.openSnack();
    }
  }

  //wrong username or password snackbar
  openSnack(){
    this.toastService.show('I am a toast!', 4000, 'green', () => alert('Toast has been dismissed'));
  }
}

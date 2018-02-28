import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {User} from "../../shared/user";
import {fadeInAnimation} from "../../shared/animations/fade-in.animation";
import {HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {animate, style, transition, trigger} from "@angular/animations";
import {MzToastService} from "ng2-materialize";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  animations: [fadeInAnimation],
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  user: User;
  typeOfAccunt: string;
  errorMessageResources = {
    email: {
      required: 'Email is required.',
      email: 'Email is invalid.',
    },
    password: {
      required: 'Password is required.',
    }
  };
  responseErrorMsg: string = "";

  constructor(private usersService: UsersService, private router: Router, private toastService: MzToastService) {
  }

  ngOnInit() {
    this.user = new User();
    this.user.userType = 'Student/Graduate';
  }

  onSubmit(submittedForm) {

    if (!submittedForm.invalid) {
      this.usersService.addUser(this.user, this.typeOfAccunt).subscribe(
        (data: HttpResponse<Object>) => {
          if (data.ok) this.router.navigate(['/login'])
        },
        (error )=>{this.responseErrorMsg = error.error; this.openSnack()}
      );
    }
    // return;
  }

  openSnack(){
    this.toastService.show('Username already exists', 2000, 'red');
  }
}

import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {User} from "../../shared/user";
import {fadeInAnimation} from "../../shared/animations/fade-in.animation";
import {HttpResponse} from "@angular/common/http";
import {Router} from "@angular/router";
import {SnackService} from "../../shared/snack.service";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  animations: [fadeInAnimation],
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  private user: User;
  private typeOfAccunt: string;
  private errorMessageResources = {
    email: {
      required: 'Email is required.',
      email: 'Email is invalid.',
    },
    password: {
      required: 'Password is required.',
    }
  };
  private responseErrorMsg: string = "";

  constructor(private usersService: UsersService,
              private router: Router,
  private snackService: SnackService) {
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
        (error) => {
          this.responseErrorMsg = error.error;
          this.snackService.openSnack('Username already exists');
        }
      );
    }
  }
}

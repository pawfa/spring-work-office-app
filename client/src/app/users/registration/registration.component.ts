import {Component, OnInit} from '@angular/core';
import {UsersService} from "../users.service";
import {User} from "../../shared/user";
import {fadeInAnimation} from "../../shared/animations/fade-in.animation";


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  animations: [fadeInAnimation],
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {
  user: User;
  typeOfAccunt: string;
  private errorMessageResources = {
    email: {
      required: 'Email is required.',
      email: 'Email is invalid.',
    },
    password: {
      required: 'Password is required.',
    }
  };
  exp = false;

  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.user = new User();
  }

  onSubmit(submittedForm) {
    if (submittedForm.invalid) {
      return;
    }
    this.usersService.addUser(this.user, this.typeOfAccunt)
  }
}

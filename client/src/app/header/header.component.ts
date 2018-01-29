import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn: Observable<boolean>;
  typeOfUser: Observable<string[]>;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.typeOfUser = this.authService.getTypeOfUser();
  }

  onLogout(){
    this.authService.logout();
  }
}

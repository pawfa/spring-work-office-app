import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {AuthenticationService} from "../shared/authentication.service";
import {linkAnimation} from "../shared/animations/link.animation";
import {loginAnimation} from "../shared/animations/login.animation";
declare var $ :any;

$( document ).ready(function(){
  $(".button-collapse").sideNav();
});


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  animations: [linkAnimation, loginAnimation],
  host: { '[@linkAnimation]': '' }
})

export class HeaderComponent implements OnInit {

  isLoggedIn: Observable<boolean>;
  typeOfUser: Observable<string[]>;
  screenSize: number;

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
    this.isLoggedIn = this.authService.isLoggedIn;
    this.typeOfUser = this.authService.getTypeOfUser();
  }

  onLogout(){
    this.authService.logout();
  }

  onResize(event) {
    this.screenSize = event.target.innerWidth;
  }

}

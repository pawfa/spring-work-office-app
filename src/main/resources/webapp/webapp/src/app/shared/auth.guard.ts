import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private router: Router, private authService: AuthenticationService) {
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    return this.authService.isLoggedIn       // {1}
      .take(1)                               // {2}
      .map((isLoggedIn: boolean) => {        // {3}
        if (!isLoggedIn){
          this.router.navigate(['/login']);  // {4}
          return false;
        }
        return true;
      });

    // if (localStorage.getItem('currentUser')) {
    //   // logged in so return true
    //   return true;
    // }
    //
    // // not logged in so redirect to login page
    // this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    // return false;
  }
}

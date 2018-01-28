import {Injectable} from '@angular/core';
import {ApiService} from "../api.service";
import {Observable} from "rxjs/Observable";
import {Person} from "../users/person";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Router} from "@angular/router";

@Injectable()
export class AuthenticationService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private token: string;

  constructor(private apiService : ApiService, private router: Router) {

    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  login(user): Observable<any> {
    return this.apiService.login(user).map(
      (resp) => {
        let token = resp.headers.get('Authorization').substr(7);
        if (token) {
          // set token property
          this.token = token;
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser',  token);

          // return true to indicate successful login
          this.loggedIn.next(true);
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }
    ).catch((error) => Observable.throw(error));
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.loggedIn.next(false);
    this.token = null;
    localStorage.removeItem('currentUser');
    this.router.navigate(['/']);
  }

  getToken(): String {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser && currentUser.token;
    return token ? token : "";
  }

}

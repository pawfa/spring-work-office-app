import {Injectable} from '@angular/core';
import {ApiService} from "../api.service";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Router} from "@angular/router";
import * as jwt_decode from 'jwt-decode';

@Injectable()
export class AuthenticationService {

  private loggedIn = new BehaviorSubject<boolean>(false);
  private userType = new BehaviorSubject<string[]>([]);
  private token: string;

  constructor(private apiService: ApiService, private router: Router) {
    this.token = localStorage.getItem('currentUser')
  }

  login(user): Observable<any> {
    return this.apiService.login(user).map(
      (resp) => {
        let token = resp.headers.get('Authorization').substr(7);
        if (token) {
          // this.userType.next(user.user_type);
          // set token property
          this.token = token;
          // store username and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', token);

          // return true to indicate successful login
          this.getTypeOfUser();
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
    this.loggedIn.next(!this.isTokenExpired());
    return this.loggedIn.asObservable();
  }

  getTokenExpirationDate(token) {
    const decoded = jwt_decode(token);
    if (decoded.exp === undefined) return null;
    const date = new Date(0);
    date.setUTCSeconds(decoded.exp);
    return date;
  }

  isTokenExpired() {
    if (!this.token) return true;
    const date = this.getTokenExpirationDate(this.token);
    if (date === undefined) return false;
    return !(date.valueOf() > new Date().valueOf());
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.loggedIn.next(false)
    this.token = null;
    localStorage.removeItem('currentUser');
    this.userType.next([]);
    this.router.navigate(['/']);
  }

  getToken(): String {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser && currentUser.token;
    return token ? token : "";
  }

  getTypeOfUser(): Observable<string[]> {
    // if(this.token == null) return this.userType.next([]);
    if (this.token) {
      const decoded = jwt_decode(this.token);
      this.userType.next(decoded.user_type);
      return this.userType.asObservable();
    }
    this.userType.next([]);
    return this.userType.asObservable();

  }

}

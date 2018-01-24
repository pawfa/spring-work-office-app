import {Injectable} from '@angular/core';
import {ApiService} from "../api.service";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthenticationService {

  private token: string;

  constructor(private apiService : ApiService) {

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
          return true;
        } else {
          // return false to indicate failed login
          return false;
        }
      }
    ).catch((error) => Observable.throw(error));
  }

  logout(): void {
    // clear token remove user from local storage to log user out
    this.token = null;
    localStorage.removeItem('currentUser');
  }

  getToken(): String {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    let token = currentUser && currentUser.token;
    return token ? token : "";
  }

}

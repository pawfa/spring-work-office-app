import {Injectable} from '@angular/core';
import {Router} from "@angular/router";
import {ApiService} from "../api.service";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";


@Injectable()
export class AuthenticationService {

  token: String;

  constructor(private apiService : ApiService) {
  }

  login(user) {
    this.apiService.login(user);
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
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

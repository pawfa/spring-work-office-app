
import { Injectable } from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {SpinnerService} from "./spinner/spinner.service";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private spinnerService: SpinnerService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem("currentUser");

    if (idToken) {
      const cloned = req.clone({
        headers: req.headers.set("Authorization",
          "Bearer " + idToken)
      });

      return next.handle(cloned).do(()=>{this.turnOnModal()}).finally(()=>{this.turnOffModal()});
    }
    else {
      return next.handle(req);
    }
  }

  private turnOnModal() {
    this.spinnerService.show()
  }

  private turnOffModal() {
    this.spinnerService.hide();

  }
}

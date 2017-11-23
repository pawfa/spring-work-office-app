import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class DataService {

  private server = "http://localhost:8080/get/offers";
  offers : String;


  constructor(private http : Http) {
  }

    getOffers(): Observable <Array<any>>{
    return this.http.get(this.server).map(res => res.json());
  }
}

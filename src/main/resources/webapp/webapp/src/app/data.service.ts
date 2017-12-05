import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataService {

  private server = "http://localhost:8080/";
  offers: Observable<any>;
  news: Observable<any>;

  constructor(private http: HttpClient) {
  }

  getOffers(): Observable<any> {
    this.news = this.http.get(this.server + "get/offers");
    return this.news;
  }

  getNews(): Observable<any> {
    this.offers = this.http.get(this.server + "get/news");
    return this.offers;
  }
}

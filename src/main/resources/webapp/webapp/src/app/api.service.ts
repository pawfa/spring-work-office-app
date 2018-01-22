import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {News} from "./shared/news";

@Injectable()
export class ApiService {

  private server = "http://localhost:8080/";
  private headers: HttpHeaders;
  private test;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  login(user) {
    return this.http.post("http://localhost:8080/login", JSON.stringify(user), {headers: this.headers,observe: "response"});
  }

  getHomePageData(): Observable<any> {
    return this.http.get(this.server);
  }

  getAllOffers(): Observable<any> {
    return this.http.get(this.server + "get/offers");
  }

  getAllNews(): Observable<any> {
    return this.http.get(this.server + "get/news");
  }

  createNews(news: News) {
    return this.http.post(this.server + "put/news", news, {headers: this.headers}).subscribe();

  }


  createOffer() {

  }

  updateOffer() {

  }

  updateNews() {

  }

  deleteOffer() {

  }

  deleteNews() {

  }

}

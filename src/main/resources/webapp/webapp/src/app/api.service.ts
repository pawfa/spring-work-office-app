import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {News} from "./shared/news";
import {Offer} from "./shared/offer";
import {User} from "./users/user";

@Injectable()
export class ApiService {

  private server = "http://localhost:8080/";
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  login(user) {
    return this.http.post("http://localhost:8080/login", JSON.stringify(user), {headers: this.headers,observe: "response"});
  }

  getHomePageData(): Observable<any> {
    return this.http.get(this.server);
  }

  createNews(news: News) {
    this.http.post(this.server + "put/news",  news, {headers: this.headers}).subscribe();

  }

  createOffer(offer: Offer) {
    this.http.post(this.server + "put/offer", offer, {headers: this.headers}).subscribe();
  }

  getUserData(){
    return this.http.get(this.server+"/profile/user", {headers: this.headers});

  }

  getAllOffers(): Observable<any> {
    return this.http.get(this.server + "get/offers");
  }

  getAllNews(): Observable<any> {
    return this.http.get(this.server + "get/news");
  }

  deleteOffer() {

  }

  deleteNews() {

  }

}

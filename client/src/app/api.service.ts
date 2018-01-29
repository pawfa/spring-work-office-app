import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {News} from "./shared/news";
import {Offer} from "./shared/offer";
import {Emp} from "./users/emp";
import {Person} from "./users/person";

@Injectable()
export class ApiService {

  // private server = "http://back_office.pawfa.usermd.net:8088/";
  private server = "http://localhost:8080/";
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  login(user) {
    return this.http.post(this.server+"login", JSON.stringify(user), {headers: this.headers,observe: "response"});
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
    return this.http.get(this.server+"profile", {headers: this.headers});
  }
  getOfferFromId(id: string){
    return this.http.get(this.server+"get/offer/"+id, {headers: this.headers});
  }

  addPerson(person: Person){
    this.http.post(this.server + "add/person", person, {headers: this.headers}).subscribe();
  }

  addEmp(emp: Emp){
    this.http.post(this.server + "add/emp", emp, {headers: this.headers}).subscribe();
  }

  getAllOffers(): Observable<any> {
    return this.http.get(this.server + "get/offers",{headers: this.headers});
  }

  getAllNews(): Observable<any> {
    return this.http.get(this.server + "get/news");
  }

  deleteOffer() {

  }

  deleteNews() {

  }

}

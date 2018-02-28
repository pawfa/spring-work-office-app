import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from "@angular/common/http";
import {News} from "./shared/news";
import {Offer} from "./shared/offer";
import {Emp} from "./users/emp";
import {Person} from "./users/person";

@Injectable()
export class ApiService {

  // private server = "http://back_office.pawfa.usermd.net:8088/";
  private server = "http://localhost:8088/";
  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders().set('Content-Type', 'application/json');
  }

  login(user) {
    return this.http.post(this.server+"login", JSON.stringify(user), {headers: this.headers,observe: "response"});
  }

  /*-------- User part --------*/

  getUserData(){
    return this.http.get(this.server+"profile", {headers: this.headers});
  }

  addPerson(person: Person){
    return this.http.post(this.server + "add/person", person, {headers: this.headers, observe: "response"});
  }

  addEmp(emp: Emp){
    return this.http.post(this.server + "add/emp", emp, {headers: this.headers,observe: "response"});
  }

  /*-------- Offer part --------*/

  createOffer(offer: Offer) {
    this.http.post(this.server + "put/offer", offer, {headers: this.headers}).subscribe();
  }

  getOfferFromId(id: string){
    return this.http.get(this.server+"get/offer/"+id, {headers: this.headers});
  }

  getTwoNewestOffers() {
    return this.http.get(this.server + "get/newestOffers",{headers: this.headers});
  }

  getAllOffers(): Observable<any> {
    return this.http.get(this.server + "get/offers",{headers: this.headers});
  }

  /*-------- News part --------*/

  createNews(news: News) {
    this.http.post(this.server + "put/news",  news, {headers: this.headers}).subscribe();
  }

  getAllNews(): Observable<any> {
    return this.http.get(this.server + "get/news",{headers: this.headers});
  }

  getNewsFromId(id: string){
    return this.http.get(this.server + "get/news/"+id,{headers: this.headers});
  }

  getOfferFromSearchTerm(searchTerm: string, category: string) {
    let params = new HttpParams().set('searchTerm', searchTerm).set('category',category);
    return this.http.get(this.server + "search",{headers: this.headers, params: params});

  }
}

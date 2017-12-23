import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient}from "@angular/common/http";
import {News} from "./shared/news";

@Injectable()
export class ApiService {

  private server = "http://localhost:8080/";
  private httpOptions;

  constructor(private http: HttpClient) {
   this.httpOptions = new Headers();
    this.httpOptions.append('Content-Type', 'application/json');

  }

  getHomePageData(): Observable<any>{
    return this.http.get(this.server);
  }

  getAllOffers(): Observable<any>{
    return this.http.get(this.server + "get/offers");
  }

  getAllNews(): Observable<any>{
    return this.http.get(this.server + "get/news");
  }

  createNews(news: News){
    return this.http.post(this.server + "put/news", news, this.httpOptions ).subscribe();

  }
  login(user){
    console.log(user.email);
    console.log(user);
    console.log(JSON.stringify(user));
    return this.http.post("http://localhost:8080/login", JSON.stringify(user),{headers : this.httpOptions});
  }

  createOffer(){

  }

  updateOffer(){

  }

  updateNews(){

  }

  deleteOffer(){

  }

  deleteNews(){

  }

}

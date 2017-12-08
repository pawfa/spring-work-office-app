import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {News} from "./shared/news";

@Injectable()
export class ApiService {

  private server = "http://localhost:8080/";
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {

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

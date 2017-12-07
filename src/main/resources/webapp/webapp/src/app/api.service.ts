import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ApiService {

  private server = "http://localhost:8080/";

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

  createOffer(){

  }

  createNews(){

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

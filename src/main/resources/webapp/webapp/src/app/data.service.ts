import {Injectable} from '@angular/core';
import { ApiService } from './api.service';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {News} from "./shared/news";

@Injectable()
export class DataService {

  private _data: BehaviorSubject<any> = new BehaviorSubject(([]));
  data: any[];

  constructor(private apiService : ApiService) {
    this.getHomePageData();
  }

  getHomePageData(){
    this.apiService.getHomePageData().subscribe(
      (data) => {
        this.data = data;
        this._data.next(this.data)
      }
    );
  }

  getOffers() {
      return this._data.asObservable();
  }


  getNews() {
    return this._data.asObservable();
  }

  putNews(news: News){
    console.log(news);
    this.apiService.createNews(news);
  }

}

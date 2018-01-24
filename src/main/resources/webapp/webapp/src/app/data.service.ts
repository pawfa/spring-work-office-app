import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {News} from "./shared/news";
import {Offer} from "./shared/offer";
import {ReplaySubject} from "rxjs/ReplaySubject";

@Injectable()
export class DataService {

  // private _data: BehaviorSubject<any> = new BehaviorSubject(([]));
  private _data: ReplaySubject<any> = new ReplaySubject(100);
  data: any[];

  constructor(private apiService: ApiService) {
    this.getHomePageData();
  }

  getHomePageData() {
    this.apiService.getHomePageData().subscribe(
      (data) => {
        this.data = data;
        this._data.next(this.data);
        this._data.complete();
      }
    );
  }

  getOffers() {

    return this._data.asObservable();

  }

  putOffer(offer: Offer) {
    this.apiService.createOffer(offer);
  }


  getNews() {
    return this._data.asObservable();
  }

  putNews(news: News) {
    this.apiService.createNews(news);
  }

}

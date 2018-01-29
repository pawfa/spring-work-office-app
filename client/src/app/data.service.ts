import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {News} from "./shared/news";
import {Offer} from "./shared/offer";
import {ReplaySubject} from "rxjs/ReplaySubject";

@Injectable()
export class DataService {

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
    return this.apiService.getAllOffers();
  }
  getOfferFromId(id: string){
    return this.apiService.getOfferFromId(id);
  }

  putOffer(offer: Offer) {

    this._data.next(this.data);
    this.apiService.createOffer(offer);
  }

  saveOffer(offer: Offer) {
    this.data[0].unshift(offer);
    this._data.next(this.data);
    this.apiService.createOffer(offer);
  }


  getNews() {
    return this._data.asObservable();
  }

  putNews(news: News) {
    this._data.next(this.data);
    this.apiService.createNews(news);
  }

  saveNews(news: News) {
    this.data[1].unshift(news);
    this._data.next(this.data);
    this.apiService.createNews(news);
  }

}

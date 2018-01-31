import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {News} from "./shared/news";
import {Offer} from "./shared/offer";
import {Observable} from "rxjs/Observable";


@Injectable()
export class DataService {

  categories: string[] = ["All","Architecture","Chemistry","Finances","Information Technology","Logistics"];

  constructor(private apiService: ApiService) {

  }

  getOffers() {
    return this.apiService.getAllOffers();
  }

  getTwoNewestOffers(){
    return this.apiService.getTwoNewestOffers();
  }

  getOfferFromId(id: string){
    return this.apiService.getOfferFromId(id);
  }

  saveOffer(offer: Offer) {
    this.apiService.createOffer(offer);
  }

  getNews() {
    return this.apiService.getAllNews();
  }

  saveNews(news: News) {
    this.apiService.createNews(news);
  }

  getNewsFromId(id: string) {
      return this.apiService.getNewsFromId(id)
  }

  search(terms: Observable<string[]>){
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.getSearchOffer(term[0],term[1]))
  }

  getSearchOffer(searchTerm: string, category: string){
    return this.apiService.getOfferFromSearchTerm(searchTerm,category);
  }


  getCategories() {
    return this.categories;
  }
}

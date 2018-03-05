import {Injectable} from '@angular/core';
import {ApiService} from './api.service';
import {News} from "./shared/news";
import {Offer} from "./shared/offer";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {ReplaySubject} from "rxjs/ReplaySubject";


@Injectable()
export class DataService {

  categories: string[] = ["All","Architecture","Chemistry","Finances","Information Technology","Logistics"];
  private twoNewestOffers = new ReplaySubject<Offer[]>();

  constructor(private apiService: ApiService) {

  }
  /*-------- Offers part --------*/

  getOffers() {
    return this.apiService.getAllOffers();
  }

  getTwoNewestOffers(){
    this.apiService.getTwoNewestOffers().subscribe(
      (data: Offer[]) => this.twoNewestOffers.next(data)
    );
    return this.twoNewestOffers.asObservable();
  }
  // refreshTwoOffers(){
  //   this.apiService.getTwoNewestOffers().subscribe(
  //     (data: Offer[]) => {
  //       this.twoNewestOffers.next(data);
  //       this.twoNewestOffers.publishLast();
  //     }
  //   );
  // }

  getOfferFromId(id: string){
    return this.apiService.getOfferFromId(id);
  }

  saveOffer(offer: Offer) {
    this.apiService.createOffer(offer);
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

  removeOffer(id: string){
    this.apiService.deleteOffer(id);
  }

  /*-------- News part --------*/

  getNews() {
    return this.apiService.getAllNews();
  }

  saveNews(news: News) {
    this.apiService.createNews(news);
  }

  getNewsFromId(id: string) {
      return this.apiService.getNewsFromId(id)
  }

  removeNews(id: string){
    this.apiService.deleteNews(id);
  }

}

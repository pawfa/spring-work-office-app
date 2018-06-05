import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {Offer} from "../../shared/offer";
import {Subject} from "rxjs/Subject";
import {fadeInAnimation} from "../../shared/animations/fade-in.animation";

@Component({
  selector: 'app-offer-search',
  templateUrl: './offer-search.component.html',
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''},
  styleUrls: ['./offer-search.component.css']
})
export class OfferSearchComponent implements OnInit {
  private searchTerm: string = "";
  private categories: string[];
  private selectedCategory: string;
  private offers: Offer[];
  private searchTerms = new Subject<string[]>();

  constructor(private dataService: DataService) {
    this.categories = this.dataService.getCategories();
    this.selectedCategory = this.categories[0];
    this.dataService.search(this.searchTerms)
      .subscribe((results: Offer[]) =>
        this.offers = results
      );
  }

  ngOnInit() {
    this.dataService.getOffers().subscribe(
      (data:Offer[]) =>
        this.offers = data
    )
  }

  onSubmit(){
    this.dataService.getSearchOffer(this.searchTerm,this.selectedCategory).subscribe();
  }

}

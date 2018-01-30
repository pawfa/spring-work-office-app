import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {Offer} from "../../shared/offer";
import {Observable} from "rxjs/Observable";
import {Subject} from "rxjs/Subject";

@Component({
  selector: 'app-offer-search',
  templateUrl: './offer-search.component.html',
  styleUrls: ['./offer-search.component.css']
})
export class OfferSearchComponent implements OnInit {
  searchTerm: string = "";
  categories: string[] = ["All","Architecture","Chemistry","Finances","Information Technology","Logistics"];
  selectedCategory: string = this.categories[0];
  offers: Offer[];
  searchTerms = new Subject<string[]>();

  constructor(private dataService: DataService) {

    this.dataService.search(this.searchTerms)
      .subscribe((results: Offer[]) => {
        this.offers = results;
      });
  }

  ngOnInit() {
    this.dataService.getOffers().subscribe(
      (data:Offer[]) =>{
        this.offers = data;
      }
    )
  }

  onSubmit(){
    this.dataService.getSearchOffer(this.searchTerm,this.selectedCategory).subscribe();
  }

}

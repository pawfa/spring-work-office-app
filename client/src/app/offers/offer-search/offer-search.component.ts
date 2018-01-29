import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-offer-search',
  templateUrl: './offer-search.component.html',
  styleUrls: ['./offer-search.component.css']
})
export class OfferSearchComponent implements OnInit {
  searchTerm: string;
  category: string;
  offers: string[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getOffers().subscribe(
      (data:string[]) =>{
        console.log(data);
      }
    )

  }

}

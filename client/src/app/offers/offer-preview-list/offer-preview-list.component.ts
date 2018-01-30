import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {Observable} from "rxjs/Observable";
import {Offer} from "../../shared/offer";

@Component({
  selector: 'app-offer-preview-list',
  templateUrl: './offer-preview-list.component.html',
  styleUrls: ['./offer-preview-list.component.css']
})
export class OfferPreviewListComponent implements OnInit {
  data : any[];

  constructor(private dataService : DataService) {
  }

  ngOnInit() {
    this.dataService.getTwoNewestOffers().subscribe(
      (data:Offer[]) => {
        this.data = data
      });
  }

}

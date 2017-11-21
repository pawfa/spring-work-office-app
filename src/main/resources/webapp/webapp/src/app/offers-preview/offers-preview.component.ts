import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-offers-preview',
  templateUrl: './offers-preview.component.html',
  styleUrls: ['./offers-preview.component.css']
})
export class OffersPreviewComponent implements OnInit {
  offers : String;

  constructor(private dataService : DataService) {
  }

  ngOnInit() {
    this.dataService.getOffers().subscribe(
      (data) => {
        this.offers = JSON.stringify(data);
      }
    );
  }

}

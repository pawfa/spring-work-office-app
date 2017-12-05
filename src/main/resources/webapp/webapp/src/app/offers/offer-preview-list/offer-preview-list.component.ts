import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-offer-preview-list',
  templateUrl: './offer-preview-list.component.html',
  styleUrls: ['./offer-preview-list.component.css']
})
export class OfferPreviewListComponent implements OnInit {
  data : Array<any>;

  constructor(private dataService : DataService) {
  }

  ngOnInit() {
    this.dataService.getOffers().subscribe(
      (data) => this.data = data
    );
  }

}

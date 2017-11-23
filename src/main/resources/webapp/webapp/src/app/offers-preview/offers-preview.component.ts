import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-offers-preview',
  templateUrl: './offers-preview.component.html',
  styleUrls: ['./offers-preview.component.css']
})
export class OffersPreviewComponent implements OnInit {
  data : Observable<any>;

  constructor(private dataService : DataService) {
  }

  ngOnInit() {
    this.data = this.dataService.getOffers();
  }

}

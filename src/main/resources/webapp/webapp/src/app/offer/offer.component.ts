import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  category: String;
  title: String;
  description : String;
  @Input() offerData: any;

  constructor() {

  }

  ngOnInit() {
    console.log(this.offerData.id)
    this.title = this.offerData.title;
    this.description = this.offerData.description;
  }

}

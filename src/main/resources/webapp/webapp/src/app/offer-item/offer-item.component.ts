import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.css']
})
export class OfferComponent implements OnInit {
  category: String;
  title: String;
  description : String;
  @Input() offerData: any;

  constructor() {

  }

  ngOnInit() {
    console.log(this.offerData.category)
    this.title = this.offerData.title;
    this.description = this.offerData.description;
    this.category = this.offerData.category;
  }

}

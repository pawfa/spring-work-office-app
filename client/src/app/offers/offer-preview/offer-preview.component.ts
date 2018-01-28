import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-offer-preview',
  templateUrl: './offer-preview.component.html',
  styleUrls: ['./offer-preview.component.css']
})
export class OfferPreviewComponent implements OnInit {
  id: String;
  category: String;
  title: String;
  description : String;
  @Input() offerData: any;

  constructor() { }

  ngOnInit() {
    this.id = this.offerData.id;
    this.title = this.offerData.title;
    this.description = this.offerData.description;
    this.category = this.offerData.category;
  }

}

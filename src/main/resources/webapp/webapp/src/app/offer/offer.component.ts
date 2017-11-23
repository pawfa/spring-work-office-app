import {Component, Input, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.css']
})
export class OfferComponent implements OnInit {
  title: String;
  description : String;
  @Input() offerData: Observable<any>;

  constructor() {

  }

  ngOnInit() {
    this.offerData.subscribe(
      (data) => {
        console.log(data);
        this.title = JSON.stringify(data[0].title);
        this.description = JSON.stringify(data[0].description);

      }
    );

  }

}

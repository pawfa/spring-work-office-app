import {Component, OnInit} from '@angular/core';
import {DataService} from "../../data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-offer',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.css']
})
export class OfferItemComponent implements OnInit {
  test: String;
  id: String;

  constructor(private dataService : DataService,private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dataService.getOffers().map(
      offers => {
        console.log(offers);
        let fl = offers.filter(off => off.id === this.id);
        (fl.length > 0) ? this.test = fl[0] : null;
      }).subscribe();
  }

}

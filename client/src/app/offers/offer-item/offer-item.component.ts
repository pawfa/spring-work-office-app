import {Component, OnInit} from '@angular/core';
import {DataService} from "../../data.service";
import {ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/Rx';
import {Offer} from "../../shared/offer";
import {fadeInAnimation} from "../../shared/animations/fade-in.animation";

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.css']
})
export class OfferItemComponent implements OnInit {
  id: string;
  title: string;
  description: string;
  category: string;

  constructor(private dataService : DataService,private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dataService.getOfferFromId(this.id)
      .subscribe((data: Offer)=>
      {
        this.title = data.title;
        this.description = data.description;
        this.category = data.category;});
  }

}

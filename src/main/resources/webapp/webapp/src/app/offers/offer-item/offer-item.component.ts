import {Component, OnInit} from '@angular/core';
import {DataService} from "../../data.service";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/Rx';

@Component({
  selector: 'app-offer',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.css']
})
export class OfferItemComponent implements OnInit {
  id: String;
  title: String;
  description: String;
  category: String;

  constructor(private dataService : DataService,private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dataService.getOffers()
      .subscribe((data)=>
      { let d = data[0].filter( off => (off.id === this.id))[0];
        this.title = d.title;
        this.description = d.description;
        this.category = d.category;});
  }

}

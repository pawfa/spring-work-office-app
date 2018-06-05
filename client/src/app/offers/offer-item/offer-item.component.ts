import {Component, OnInit} from '@angular/core';
import {DataService} from "../../data.service";
import {ActivatedRoute, Router} from "@angular/router";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/Rx';
import {Offer} from "../../shared/offer";
import {AuthenticationService} from "../../shared/authentication.service";
import {UsersService} from "../../users/users.service";

@Component({
  selector: 'app-offer-item',
  templateUrl: './offer-item.component.html',
  styleUrls: ['./offer-item.component.css']
})
export class OfferItemComponent implements OnInit {
  private id: string;
  private title: string;
  private description: string;
  private category: string;
  private userId: number;
  private offerUserId: number;

  constructor(private dataService : DataService,
              private route: ActivatedRoute,
              private usersService: UsersService,
              private router: Router) {

  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.dataService.getOfferFromId(this.id)
      .subscribe((data: Offer)=>
      {
        this.title = data.title;
        this.description = data.description;
        this.category = data.category;
        this.offerUserId = data.userId;
      });
    this.usersService.getUserId().subscribe(
      data => {
          this.userId = data;
      }
    )
  }

  removeOffer(){
    this.dataService.removeOffer(this.id).finally(
      ()=>{this.dataService.getTwoNewestOffers()}
    ).subscribe();
    this.router.navigate(['/'])
  }
}

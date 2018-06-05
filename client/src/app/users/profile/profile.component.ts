import {Component, OnInit} from '@angular/core';
import {Offer} from "../../shared/offer";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private usersOffers: Offer[];

  constructor(private dataService: DataService) {}

  ngOnInit() {

    this.dataService.getAllOfersFromUserId().subscribe(
      (data: Offer[]) => this.usersOffers = data)
  }

}

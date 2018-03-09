import { Component, OnInit } from '@angular/core';
import {Offer} from "../../shared/offer";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-profile-offers',
  templateUrl: './profile-offers.component.html',
  styleUrls: ['./profile-offers.component.css']
})
export class ProfileOffersComponent implements OnInit {

  data : Offer[];

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getAllOfersFromUserId().subscribe(
      (data: Offer[])=> {this.data = data}
    )
  }

}

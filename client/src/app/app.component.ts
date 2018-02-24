import {Component, Injectable, OnInit} from '@angular/core';
import {fadeInAnimation} from "./shared/animations/fade-in.animation";
import * as jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [fadeInAnimation],
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit {

  constructor() {

  }

  ngOnInit(): void {
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}

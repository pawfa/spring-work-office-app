import { Component, OnInit } from '@angular/core';
import {fadeInAnimation} from "../shared/animations/fade-in.animation";

@Component({
  selector: 'app-central',
  templateUrl: './central.component.html',
  animations: [fadeInAnimation],
  host: {'[@fadeInAnimation]': ''},
  styleUrls: ['./central.component.css']
})
export class CentralComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {

  }

}

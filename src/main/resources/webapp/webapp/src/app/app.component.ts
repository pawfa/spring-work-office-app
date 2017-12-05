import {Component, Injectable, OnInit} from '@angular/core';
import 'rxjs/add/operator/map'
import {DataService} from "./data.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {

  }
}

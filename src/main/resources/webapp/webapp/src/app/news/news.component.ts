import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  data : Array<any>;

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.getNews().subscribe(
      (data) => this.data = data
    );
  }

}

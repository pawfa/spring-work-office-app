import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {


  constructor(private dataService : DataService) { }

  ngOnInit() {


  }

}

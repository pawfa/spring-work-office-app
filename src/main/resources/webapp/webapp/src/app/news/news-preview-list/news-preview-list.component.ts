import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-news-preview-list',
  templateUrl: './news-preview-list.component.html',
  styleUrls: ['./news-preview-list.component.css']
})
export class NewsPreviewListComponent implements OnInit {

  data : any[];

  constructor(private dataService : DataService) { }

  ngOnInit() {
    this.dataService.getNews().subscribe(
      (data) => this.data = data
    );

  }

}

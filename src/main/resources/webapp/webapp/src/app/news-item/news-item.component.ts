import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  header: String;
  paragraph : String;
  @Input() newsData: any;

  constructor() { }

  ngOnInit() {
    console.log(this.newsData);
    this.header = this.newsData.header;
    this.paragraph = this.newsData.paragraph;
  }

}

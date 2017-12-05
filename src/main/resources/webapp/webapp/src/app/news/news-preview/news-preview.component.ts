import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.css']
})
export class NewsPreviewComponent implements OnInit {
  id: String;
  header: String;
  paragraph : String;
  @Input() newsData: any;

  constructor() { }

  ngOnInit() {
    console.log(this.newsData);
    this.id = this.newsData.id;
    this.header = this.newsData.header;
    this.paragraph = this.newsData.paragraph;
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../data.service";
import {ActivatedRoute} from "@angular/router";
import {News} from "../../shared/news";

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  id : string;
  header : string;
  paragraph : string;

  constructor(private dataService : DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.dataService.getNewsFromId(this.id)
      .subscribe((data: News)=>
      {
        this.header = data.header;
        this.paragraph = data.paragraph});
  }

}

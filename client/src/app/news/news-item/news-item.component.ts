import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../data.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  id : String;
  header : String;
  paragraph : String;

  constructor(private dataService : DataService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.dataService.getNews()
      .subscribe((data)=>
      {let d = data[1].filter( off => (off.id === this.id))[0];
        this.header = d.header;
        this.paragraph = d.paragraph});
  }

}

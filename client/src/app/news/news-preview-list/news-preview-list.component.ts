import {Component, Inject, OnInit} from '@angular/core';
import {DataService} from "../../data.service";
import {PagerService} from "../../shared/pager.service";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-news-preview-list',
  templateUrl: './news-preview-list.component.html',
  styleUrls: ['./news-preview-list.component.css']
})
export class NewsPreviewListComponent implements OnInit {

  data: any[];
  pager: any = {};
  pagedItems: any[];

  constructor(private dataService: DataService,
              private pagerService: PagerService,
              @Inject(DOCUMENT) private document: Document) {
  }

  ngOnInit() {
    this.dataService.getNews().subscribe(
      (data) => {this.data = data},
      error => console.log("Error: ", error),
      () => this.setPage(1)
    );
  }

  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.data.length, page);

    // get current page of items
    this.pagedItems = this.data.slice(this.pager.startIndex, this.pager.endIndex + 1);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }

}

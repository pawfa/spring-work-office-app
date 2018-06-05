import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {DataService} from "../../data.service";
import {PagerService} from "../../shared/pager.service";
import {DOCUMENT} from "@angular/common";
import {ScrollToConfigOptions, ScrollToService} from "@nicky-lenaers/ngx-scroll-to";

@Component({
  selector: 'app-news-preview-list',
  templateUrl: './news-preview-list.component.html',
  styleUrls: ['./news-preview-list.component.css']
})
export class NewsPreviewListComponent implements OnInit {

  private data: any[];
  private pager: any = {};
  private pagedItems: any[];


  @ViewChild('container')
  private container: ElementRef;

  constructor(private dataService: DataService,
              private pagerService: PagerService,
              @Inject(DOCUMENT) private document: any,
              private _scrollToService: ScrollToService) {
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


  }

  myClick(){
    let offsetHeight = document.getElementById('head').offsetHeight;
    const config: ScrollToConfigOptions = {
      target: 'head',
      offset: -offsetHeight-100
    };
    this._scrollToService.scrollTo(config);
  }

}

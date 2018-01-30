import { Component, OnInit } from '@angular/core';
import {News} from "../news";
import {DataService} from "../../data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {isNullOrUndefined} from "util";
import {Offer} from "../offer";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  type : string;
  id: string = null;

  private newsModel = new News();
  private offerModel = new Offer();
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.type = this.route.snapshot.url[0].path;
    if(this.type === "news" && !isNullOrUndefined(this.route.snapshot.params['id'])){
      this.dataService.getNewsFromId(this.id)
        .subscribe((data: News)=>
        {this.newsModel = data;
        });
    }else if(this.type === "offers" && !isNullOrUndefined(this.route.snapshot.params['id'])){
      this.dataService.getOfferFromId(this.id)
        .subscribe((data:Offer)=>
        {
          this.offerModel = data});
    }
  }

  onSubmit() {
    if(this.type === "offers"){
        this.dataService.saveOffer(this.offerModel)
    }else{
        this.dataService.saveNews(this.newsModel);
    }
    this.router.navigate(['/'])

  }

}

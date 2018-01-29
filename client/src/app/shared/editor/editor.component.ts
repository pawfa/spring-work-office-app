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
      this.newsModel.id = this.id;
      this.dataService.getNews()
        .subscribe((data)=>
        {let d = data[1].filter( off => (off.id === this.id))[0];
          this.newsModel.header = d.header;
          this.newsModel.paragraph = d.paragraph});
    }else if(this.type === "offers" && !isNullOrUndefined(this.route.snapshot.params['id'])){
      this.offerModel.id = this.id;
      this.dataService.getOfferFromId(this.id)
        .subscribe((data:Offer)=>
        {
          this.offerModel.title = data.title;
          this.offerModel.description = data.description;
          this.offerModel.category = data.category;});
    }
  }

  onSubmit() {
    if(this.type === "offers"){
      if(this.newsModel.id == null){
        this.dataService.saveOffer(this.offerModel)
      }else{
        this.dataService.putOffer(this.offerModel)
      }

    }else{
      if(this.newsModel.id == null){
        this.dataService.saveNews(this.newsModel);
      }else{
        this.dataService.putNews(this.newsModel);
      }

    }
    this.router.navigate(['/'])

  }

}

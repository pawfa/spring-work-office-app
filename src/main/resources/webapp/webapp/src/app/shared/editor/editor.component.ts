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
  type : String;
  id: String = null;

  private newsModel = new News(null,"","");
  private offerModel = new Offer(null,"","","");
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    this.id = this.route.snapshot.params['id'];
    this.type = this.route.snapshot.url[0].path;
    if(this.type === "news" && !isNullOrUndefined(this.route.snapshot.params['id'])){
      this.dataService.getNews()
        .subscribe((data)=>
        {let d = data[1].filter( off => (off.id === this.id))[0];
          this.newsModel.header = d.header;
          this.newsModel.paragraph = d.paragraph});
    }else if(this.type === "offers" && !isNullOrUndefined(this.route.snapshot.params['id'])){
      this.dataService.getOffers()
        .subscribe((data)=>
        { let d = data[0].filter( off => (off.id === this.id))[0];
          this.offerModel.title = d.title;
          this.offerModel.description = d.description;
          this.offerModel.category = d.category;});
    }
  }

  onSubmit() {
    console.log(this.route.snapshot.url);
    console.log(this.newsModel.header);
    console.log(this.offerModel.title);
    // this.dataService.putNews(this.model);
    // this.router.navigate(['/'])
  }

}

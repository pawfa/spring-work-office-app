import { Component, OnInit } from '@angular/core';
import {News} from "../../shared/news";
import {DataService} from "../../data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.css']
})
export class NewsEditorComponent implements OnInit {

  id: String = null;
  // header: String = "";
  // paragraph: String = "";

  private model = new News(null,"","");
  constructor(private dataService: DataService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {

    if(!isNullOrUndefined(this.route.snapshot.params['id'])){
    this.id = this.route.snapshot.params['id'];
    this.dataService.getNews()
      .subscribe((data)=>
      {let d = data[1].filter( off => (off.id === this.id))[0];
        this.model.header = d.header;
        this.model.paragraph = d.paragraph});
    }
  }

  onSubmit() {
    console.log(this.model.header);
    // this.dataService.putNews(this.model);
    // this.router.navigate(['/'])
  }

}

import { Component, OnInit } from '@angular/core';
import {News} from "../../shared/news";
import {DataService} from "../../data.service";

@Component({
  selector: 'app-news-editor',
  templateUrl: './news-editor.component.html',
  styleUrls: ['./news-editor.component.css']
})
export class NewsEditorComponent implements OnInit {



  private model = new News(null,"","");
  constructor(private dataService: DataService) { }

  ngOnInit() {

  }

  onSubmit() {

    this.dataService.putNews(this.model);
  }

}

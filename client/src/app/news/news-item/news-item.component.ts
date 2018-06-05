import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {News} from "../../shared/news";
import {AuthenticationService} from "../../shared/authentication.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {
  private id: string;
  private header: string;
  private paragraph: string;
  private typeOfUser: Observable<String[]>;

  constructor(private dataService: DataService,
              private route: ActivatedRoute,
              private authService: AuthenticationService,
              private router: Router) {
  }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.typeOfUser = this.authService.getTypeOfUser();
    this.dataService.getNewsFromId(this.id)
      .subscribe((data: News) => {
        this.header = data.header;
        this.paragraph = data.paragraph;
      });
  }

  removeNews() {
    this.dataService.removeNews(this.id).finally(
      () => {
        this.dataService.getNews()
      }
    ).subscribe();
    this.router.navigate(['/']);

  }

}

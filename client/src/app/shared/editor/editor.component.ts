import {Component, OnInit} from '@angular/core';
import {News} from "../news";
import {DataService} from "../../data.service";
import {ActivatedRoute, Router} from "@angular/router";
import {isNullOrUndefined} from "util";
import {Offer} from "../offer";
import {UsersService} from "../../users/users.service";

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  type: string;
  id: string = null;
  categories: string[];
  newsModel = new News();
  offerModel = new Offer();
  userId: number;
  errorMessageResources = {
    header: {
      required: 'Header is required.',
    },
    paragraph: {
      required: 'Pragraph is required.',
    },
    title: {
      required: 'Title is required.',
    },
    description: {
      required: 'Description is required.',
    },
  };

  constructor(private dataService: DataService,
              private router: Router,
              private route: ActivatedRoute,
              private usersService: UsersService) {
  }

  ngOnInit() {
    this.categories = this.dataService.getCategories().slice(1);
    this.offerModel.category = this.categories[0];
    this.id = this.route.snapshot.params['id'];
    this.type = this.route.snapshot.url[0].path;
    this.usersService.getUserId().subscribe(
      id => this.userId = id
    );

    if (this.type === "news" && !isNullOrUndefined(this.route.snapshot.params['id'])) {
      this.dataService.getNewsFromId(this.id)
        .subscribe((data: News) => this.newsModel = data);
    } else if (this.type === "offers" && !isNullOrUndefined(this.route.snapshot.params['id'])) {
      this.dataService.getOfferFromId(this.id)
        .subscribe((data: Offer) => this.offerModel = data)
    }
  }

  onSubmit(submittedForm) {
    if (!submittedForm.invalid) {
      if (this.type === "offers") {
        this.offerModel.userId = this.userId;
        this.dataService.saveOffer(this.offerModel)
      } else {
        this.dataService.saveNews(this.newsModel);
      }
      this.router.navigate(['/'])
    }
  }

}

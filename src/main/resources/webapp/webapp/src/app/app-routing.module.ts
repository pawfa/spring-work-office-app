import {NgModule} from "@angular/core";
import { RouterModule } from "@angular/router"
import {CentralComponent} from "./central/central.component";
import {NewsItemComponent} from "./news/news-item/news-item.component";
import {OfferItemComponent} from "./offers/offer-item/offer-item.component";

const routes = [
  {path: '', component: CentralComponent, pathMatch: "full"},
  {path: 'offers/:id', component: OfferItemComponent,pathMatch: "full"},
  {path: 'news/:id', component: NewsItemComponent, pathMatch: "full"},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}

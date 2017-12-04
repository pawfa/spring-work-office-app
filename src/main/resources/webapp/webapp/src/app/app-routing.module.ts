import {NgModule} from "@angular/core";
import { RouterModule } from "@angular/router"
import {CentralComponent} from "./central/central.component";
import {OffersComponent} from "./offers/offers.component";
import {NewsComponent} from "./news/news.component";
import {NewsItemComponent} from "./news-item/news-item.component";

const routes = [
  {path: '', component: CentralComponent, children: [
    {path: '', component: NewsComponent}
  ]},
  {path: 'offers', component: OffersComponent},
  {path: 'news', component: NewsComponent, pathMatch: "full"},
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

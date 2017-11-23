import {NgModule} from "@angular/core";
import { RouterModule } from "@angular/router"
import {CentralComponent} from "./central/central.component";
import {OffersComponent} from "./offers/offers.component";

const routes = [
  {path: '', component: CentralComponent},
  {path: 'offers', component: OffersComponent},
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

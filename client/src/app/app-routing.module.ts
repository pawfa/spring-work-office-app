import {NgModule} from "@angular/core";
import { RouterModule } from "@angular/router"
import {CentralComponent} from "./central/central.component";
import {NewsItemComponent} from "./news/news-item/news-item.component";
import {OfferItemComponent} from "./offers/offer-item/offer-item.component";
import {EditorComponent} from "./shared/editor/editor.component";
import {LoginFormComponent} from "./shared/login-form/login-form.component";
import {AuthGuard} from "./shared/auth.guard";
import {RegistrationComponent} from "./users/registration/registration.component";
import {UserComponent} from "./users/user/user.component";
import {OfferSearchComponent} from "./offers/offer-search/offer-search.component";
import {ProfileComponent} from "./users/profile/profile.component";
import {ProfileOffersComponent} from "./users/profile-offers/profile-offers.component";


const routes = [
  {path: '', component: CentralComponent, pathMatch: "full"},
  {path: 'login', component: LoginFormComponent,pathMatch: "full"},
  {path: 'registration', component: RegistrationComponent,pathMatch: "full"},
  {path: 'news/editor', component: EditorComponent,pathMatch: "full"},
  {path: 'news/editor/:id', component: EditorComponent,pathMatch: "full"},
  {path: 'offers', component: OfferSearchComponent,pathMatch: "full", canActivate: [AuthGuard]},
  {path: 'offers/editor', component: EditorComponent,pathMatch: "full"},
  {path: 'offers/editor/:id', component: EditorComponent,pathMatch: "full"},
  {path: 'offers/:id', component: OfferItemComponent,pathMatch: "full", canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], children: [
      {path: '', component: UserComponent, pathMatch: 'full'},
      {path: 'offers', component: ProfileOffersComponent,pathMatch: 'full'}
    ]},
  {path: 'news/:id', component: NewsItemComponent, pathMatch: "full"},
  { path: 'login', name: 'Login', component: LoginFormComponent},
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

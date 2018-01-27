import {NgModule} from "@angular/core";
import { RouterModule } from "@angular/router"
import {CentralComponent} from "./central/central.component";
import {NewsItemComponent} from "./news/news-item/news-item.component";
import {OfferItemComponent} from "./offers/offer-item/offer-item.component";
import {EditorComponent} from "./shared/editor/editor.component";
import {LoginFormComponent} from "./shared/login-form/login-form.component";
import {AuthGuard} from "./shared/auth.guard";
import {EmpComponent} from "./users/emp/emp.component";
import {PersonComponent} from "./users/person/person.component";
import {RegistrationComponent} from "./users/registration/registration.component";


const routes = [
  {path: '', component: CentralComponent, pathMatch: "full"},
  {path: 'login', component: LoginFormComponent,pathMatch: "full"},
  {path: 'registration', component: RegistrationComponent,pathMatch: "full"},
  {path: 'news/editor', component: EditorComponent,pathMatch: "full"},
  {path: 'news/editor/:id', component: EditorComponent,pathMatch: "full"},
  {path: 'offers/editor', component: EditorComponent,pathMatch: "full"},
  {path: 'offers/editor/:id', component: EditorComponent,pathMatch: "full"},
  {path: 'offers/:id', component: OfferItemComponent,pathMatch: "full", canActivate: [AuthGuard]},
  {path: 'profile/user', component: PersonComponent,pathMatch: "full", canActivate: [AuthGuard]},
  {path: 'profile/emp', component: EmpComponent,pathMatch: "full", canActivate: [AuthGuard]},
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

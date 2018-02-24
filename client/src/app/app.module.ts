import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CentralComponent } from './central/central.component';
import { OfferPreviewComponent } from './offers/offer-preview/offer-preview.component';
import { AppRoutingModule } from "./app-routing.module";
import { DataService } from "./data.service";
import { OfferItemComponent } from './offers/offer-item/offer-item.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { NewsItemComponent } from './news/news-item/news-item.component';
import { NewsPreviewComponent } from './news/news-preview/news-preview.component';
import { OfferPreviewListComponent } from "./offers/offer-preview-list/offer-preview-list.component";
import { NewsPreviewListComponent } from "./news/news-preview-list/news-preview-list.component";
import {EditorComponent} from './shared/editor/editor.component';
import {ApiService} from "./api.service";
import {FormsModule} from "@angular/forms";
import { LoginFormComponent } from './shared/login-form/login-form.component';
import {AuthenticationService} from "./shared/authentication.service";
import {AuthGuard} from "./shared/auth.guard";
import {PagerService} from "./shared/pager.service";
import {TokenInterceptor} from "./shared/token-interceptor";
import { UserComponent } from './users/user/user.component';
import { EmpComponent } from './users/emp/emp.component';
import { RegistrationComponent } from './users/registration/registration.component';
import {UsersService} from "./users/users.service";
import { OfferSearchComponent } from './offers/offer-search/offer-search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MzButtonModule, MzCardModule, MzInputModule, MzNavbarModule, MzToastService,
  MzValidationModule
} from "ng2-materialize";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CentralComponent,
    OfferPreviewComponent,
    OfferPreviewListComponent,
    OfferItemComponent,
    LoginHeaderComponent,
    NewsItemComponent,
    NewsPreviewComponent,
    NewsPreviewListComponent,
    EditorComponent,
    LoginFormComponent,
    UserComponent,
    EmpComponent,
    RegistrationComponent,
    OfferSearchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MzInputModule,
    MzValidationModule,
    MzNavbarModule,
    MzCardModule,
    MzButtonModule
  ],
  providers: [
    AuthGuard,
    DataService,
    ApiService,
    AuthenticationService,
    PagerService,
    UsersService,
    {provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true},
    MzToastService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

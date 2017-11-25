import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { CentralComponent } from './central/central.component';
import { OffersComponent } from './offers/offers.component';
import { NewsComponent } from './news/news.component';
import {AppRoutingModule} from "./app-routing.module";
import { OffersPreviewComponent } from './offers-preview/offers-preview.component';
import {DataService} from "./data.service";
import { OfferComponent } from './offer-item/offer-item.component';
import { LoginHeaderComponent } from './login-header/login-header.component';
import { NewsItemComponent } from './news-item/news-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CentralComponent,
    OffersComponent,
    NewsComponent,
    OffersPreviewComponent,
    OfferComponent,
    LoginHeaderComponent,
    NewsItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

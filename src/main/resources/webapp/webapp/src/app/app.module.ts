import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {HttpModule} from "@angular/http";
import { HeaderComponent } from './header/header.component';
import { CentralComponent } from './central/central.component';
import { OffersComponent } from './offers/offers.component';
import { NewsComponent } from './news/news.component';
import {AppRoutingModule} from "./app-routing.module";
import { OffersPreviewComponent } from './offers-preview/offers-preview.component';
import {DataService} from "./data.service";
import { OfferComponent } from './offer/offer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CentralComponent,
    OffersComponent,
    NewsComponent,
    OffersPreviewComponent,
    OfferComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

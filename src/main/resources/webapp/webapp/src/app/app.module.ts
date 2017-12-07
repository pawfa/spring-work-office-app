import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
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
import { NewsEditorComponent } from './news/news-editor/news-editor.component';
import {ApiService} from "./api.service";

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
    NewsEditorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }

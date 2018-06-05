import {Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-preview',
  templateUrl: './news-preview.component.html',
  styleUrls: ['./news-preview.component.css']
})

export class NewsPreviewComponent {
  @Input() id: string;
  @Input() header: string;
  @Input() paragraph: string;

  constructor() { }

}

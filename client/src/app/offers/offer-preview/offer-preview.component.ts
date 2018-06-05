import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-offer-preview',
  templateUrl: './offer-preview.component.html',
  styleUrls: ['./offer-preview.component.css']
})
export class OfferPreviewComponent {
  @Input() id: string;
  @Input() category: string;
  @Input() title: string;
  @Input() description : string;

  constructor() { }

  ngOnInit() {
  }

}

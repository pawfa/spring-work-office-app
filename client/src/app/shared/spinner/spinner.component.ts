import {Component, Input, OnInit} from '@angular/core';
import {SpinnerService} from "./spinner.service";

@Component({
  selector: 'app-spinner',
  template: '' +
  '<div class="loader" *ngIf="show"></div>',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  // @Input()
  public show: boolean;

  constructor(private spinnerService: SpinnerService) {
    spinnerService.register(this);
  }

  ngOnInit() {
    this.show = false;
  }
  start(){
    console.log("odkrywam");
    this.show = true;
  }

  stop(){
    console.log("chowam");
    this.show = false;
  }

}

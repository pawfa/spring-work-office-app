import {Injectable, OnInit} from '@angular/core';
import {SpinnerComponent} from "./spinner.component";

@Injectable()
export class SpinnerService implements OnInit{

  private spinner: SpinnerComponent;

  constructor() { }


  ngOnInit(): void {
  }

  show(){

    this.spinner.start();
  }

  hide(){

    this.spinner.stop();
  }

  register(param: SpinnerComponent) {
    this.spinner = param;
  }
}

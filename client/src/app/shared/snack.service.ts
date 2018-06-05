import { Injectable } from '@angular/core';
import {MzToastService} from "ng2-materialize";

@Injectable()
export class SnackService {

  constructor(private toastService: MzToastService) {}

  openSnack(message: string) {
    this.toastService.show(message, 2000, 'red');
  }

}

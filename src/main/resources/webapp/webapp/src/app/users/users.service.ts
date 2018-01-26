import {Injectable, OnInit} from '@angular/core';
import {ApiService} from "../api.service";

@Injectable()
export class UsersService implements OnInit {


  constructor(private apiService: ApiService) {

  }

  ngOnInit(): void {
  }
}

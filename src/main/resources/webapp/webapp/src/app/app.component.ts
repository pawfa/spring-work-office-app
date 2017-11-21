import {Component, Injectable, OnInit} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit {
  title = 'JavasampleApproach HelloWord Angular4 App';
  data : string;


  constructor(private http : Http, private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  getData(){
    return this.http.get("http://localhost:8080/").map(res => res.json()).subscribe(
      data => this.data = JSON.stringify(data)
    )

  }
}

import {Component, Injectable, OnInit} from '@angular/core';
import 'rxjs/add/operator/map'
import {DataService} from "./data.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent implements OnInit {
  title = 'JavasampleApproach HelloWord Angular4 App';
  data : string;


  constructor(private http : HttpClient, private dataService: DataService) {
  }

  ngOnInit(): void {
  }

  getData(){
    return this.http.get("http://localhost:8080/").subscribe(
      data => this.data = JSON.stringify(data)
    )

  }
}

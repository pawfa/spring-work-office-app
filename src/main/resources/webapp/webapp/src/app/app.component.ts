import {Component, Injectable} from '@angular/core';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  title = 'JavasampleApproach HelloWord Angular4 App';
  http : Http;
  data : string;


  constructor(_http : Http) {
    this.http = _http;
  }

  getData(){
    return this.http.get("http://localhost:8080/").map(res => res.json()).subscribe(
      data => this.data = JSON.stringify(data)
    )

  }
}

import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Yummys';
  teams$ = this.http.get<any>('/api/teams');
  constructor(private http: HttpClient) {}
}


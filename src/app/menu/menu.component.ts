import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})


export class MenuComponent{

  teams$ = this.http.get<any>(' http://localhost:3000/teams');

  constructor(private http: HttpClient) {}
}

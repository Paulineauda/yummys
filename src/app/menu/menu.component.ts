import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any[]>('api/users').subscribe((data) => {
      this.users = data;
    });
  }
}

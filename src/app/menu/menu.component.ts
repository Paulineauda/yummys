import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../product";
import {Observable} from "rxjs";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})

export class MenuComponent{

  entrees: Observable<Product[]> = this.http.get<Product[]>('/api/entrees');
  plats: Observable<Product[]> = this.http.get<Product[]>('/api/plats');
  desserts: Observable<Product[]> = this.http.get<Product[]>('/api/desserts');
  boissons: Observable<Product[]> = this.http.get<Product[]>('/api/boissons');
  constructor(private http: HttpClient) {}
}

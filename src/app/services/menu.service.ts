import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product'; // Adjust the path as needed

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  getEntrees(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/entrees');
  }

  getPlats(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/plats');
  }

  getDesserts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/desserts');
  }

  getBoissons(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/boissons');
  }
}

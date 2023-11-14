import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../Models/product';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  public constructor(private http: HttpClient) { }

  public getEntrees(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/entrees');
  }

  public getPlats(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/plats');
  }

  public getDesserts(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/desserts');
  }

  public getBoissons(): Observable<Product[]> {
    return this.http.get<Product[]>('/api/boissons');
  }
}

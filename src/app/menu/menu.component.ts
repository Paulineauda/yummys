import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../product";
import {Observable} from "rxjs";
import {PanierService} from "../services/panier.service";

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

  showEntrees: boolean = false;
  showPlats: boolean = false;
  showBoissons: boolean = false;
  showDesserts: boolean = false;

  constructor(private http: HttpClient, public panierService: PanierService) {}
}


import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../Models/product';
import { PanierService } from '../../services/panier.service';
import { MenuService } from '../../services/menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  public entrees$ !: Observable<Product[]>;
  public plats$!: Observable<Product[]>;
  public desserts$!: Observable<Product[]>;
  public boissons$!: Observable<Product[]>;

  public showEntrees : boolean = false;
  public showPlats : boolean = false;
  public showDesserts : boolean = false;
  public showBoissons : boolean = false;

  public constructor(private menuService: MenuService, public panierService: PanierService) {}

  public ngOnInit() {
    this.entrees$ = this.menuService.getEntrees();
    this.plats$ = this.menuService.getPlats();
    this.desserts$ = this.menuService.getDesserts();
    this.boissons$ = this.menuService.getBoissons();
  }

  public getShowEntrees() : void{
    this.showEntrees = true;
    this.showPlats = false;
    this.showDesserts = false;
    this.showBoissons = false;
  }

  public getShowPlats() : void{
    this.showEntrees = false;
    this.showPlats = true;
    this.showDesserts = false;
    this.showBoissons = false;
  }

  public getShowDesserts() : void{
    this.showEntrees = false;
    this.showPlats = false;
    this.showDesserts = true;
    this.showBoissons = false;
  }

  public getShowBoissons() : void{
    this.showEntrees = false;
    this.showPlats = false;
    this.showDesserts = false;
    this.showBoissons = true;
  }
}




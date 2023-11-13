import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product'; // Adjust the path as needed
import { PanierService } from '../services/panier.service'; // Adjust as needed
import { MenuService } from './menu.service'; // Adjust the path as needed

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  entrees$ !: Observable<Product[]>;
  plats$!: Observable<Product[]>;
  desserts$!: Observable<Product[]>;
  boissons$!: Observable<Product[]>;

  slideImages: string[] = [
    "assets/baklava.jpg",
    "assets/chichtaouk.jpg",
    "assets/atayefassafiri.jpg",
    'assets/brochetteagneau.jpg',
    'assets/chawarmapoulet.jpg',
    'assets/houmous.jpg',
    'assets/samboussek.jpg',
    'assets/samboussekviandes.jpg'

  ];
  currentSlideIndex: number = 0;

  public showEntrees: boolean = false;
  public showPlats: boolean = false;
  public showBoissons: boolean = false;
  public showDesserts: boolean = false;

  constructor(private menuService: MenuService, public panierService: PanierService) {
  }

  ngOnInit() {
    this.entrees$ = this.menuService.getEntrees();
    this.plats$ = this.menuService.getPlats();
    this.desserts$ = this.menuService.getDesserts();
    this.boissons$ = this.menuService.getBoissons();

    // Slideshow
    setInterval(() => {
      this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slideImages.length;
    }, 4000);
  }

}



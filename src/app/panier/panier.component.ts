import { Component } from '@angular/core';
import {Product} from "../product";
import {PanierService} from "../services/panier.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {

  cartItems : Product[] = this.panierService.getItemsFromCart();
  totalAmount: number = this.panierService.getTotalAmount();

  constructor(public panierService: PanierService) {}
}

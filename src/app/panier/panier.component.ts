import { Component } from '@angular/core';
import {Product} from "../product";
import {PanierService} from "../services/panier.service";
import {ConnectService} from "../services/connect.service";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {

  protected cartItems : Product[] = this.panierService.getItemsFromCart();
  protected showConnectModal :  boolean = false;

  constructor(public panierService: PanierService, public connectService: ConnectService) {}
}

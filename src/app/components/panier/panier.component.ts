import {Component} from '@angular/core';
import {Product} from "../../Models/product";
import {PanierService} from "../../services/panier.service";
import {ConnectService} from "../../services/connect.service";


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent {

  protected cartItems : Product[] = this.panierService.getItemsFromCart();

  protected commandeModalIsVisible :  boolean = false;

  public showCommandeModal():void{
    this.commandeModalIsVisible = true;
  }

  public closeCommandeModal(bol: boolean) {
    this.commandeModalIsVisible = bol;
  }

  public constructor(public panierService: PanierService, public connectService: ConnectService ) {}

}

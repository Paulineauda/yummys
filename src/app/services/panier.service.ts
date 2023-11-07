import { Injectable } from '@angular/core';
import {Product} from "../product";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class PanierService {
  cartItems : Product[] = [];
  AddedPopUpVisible = false;
  constructor(private router: Router) {}

  addItemsToCart = (product : Product) => {
    let productExists = false;
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        this.cartItems[i].quantity++;
        productExists = true;
        this.AddedPopUpVisible = true;
        break;
      }
    }
    if (!productExists) {
      this.cartItems.push(product);
    }
    this.AddedPopUpVisible = true;
    setTimeout(() => {
      this.AddedPopUpVisible = false;
    }, 3000);
  }

  getItemsFromCart(): Product[] {
    return this.cartItems;
  }

  clearCart = () => {
    this.cartItems = [];
    this.router.navigate(['/Menu']);
  }

  removeFromCart = (product : Product) => {
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
    if (this.cartItems.length === 0) {
      this.router.navigate(['/Menu']);
    }
  }

  decrementFromCart = (product : Product) => {
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        if (this.cartItems[i].quantity === 0) {
          this.removeFromCart(product);
        } else {
          this.cartItems[i].quantity--;
        }
        break;
      }
    }
  }

  getTotalAmount(): string {
    let totalAmount = 0;
    if (this.cartItems) {
      this.cartItems.forEach((item: Product) => {
        totalAmount += item.quantity * item.price;
      });
    }
    return totalAmount.toFixed(2);
  }


  commander() : void {
  window.alert("La commande est validée ! Vous pourrez venir la chercher dans une dizaine de minutes.")
}
}


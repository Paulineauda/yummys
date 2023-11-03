import { Injectable } from '@angular/core';
import {Product} from "../product";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class PanierService {
  cartItems : Product[] = [];
  alertAdded : boolean = false;
  alertRemoved : boolean = false;
  totalAmount : number = 0;
  constructor(private router: Router) {}

  addItemsToCart = (product : Product) => {
    let productExists = false;
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        this.cartItems[i].quantity++;
        productExists = true;
        this.getTotalAmount();
        break;
      }
    }
    if (!productExists) {
      this.cartItems.push(product);
    }
    this.alertAdded = true;
    this.getTotalAmount();
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
    this.getTotalAmount();
  }

  decrementFromCart = (product : Product) => {
    for (let i in this.cartItems) {
      if (this.cartItems[i].id === product.id) {
        if (this.cartItems[i].quantity === 0) {
          this.removeFromCart(product);
        } else {
          this.cartItems[i].quantity--;
        }
        this.getTotalAmount();
        break;
      }
    }
    this.alertRemoved = true;
    this.getTotalAmount();
  }

  getTotalAmount(): number {
    let totalAmount = 0;
    if (this.cartItems) {
      this.cartItems.forEach((item: Product) => {
        totalAmount += item.quantity * item.price;
      });
    }
    this.totalAmount = totalAmount;
    return totalAmount;
  }


}


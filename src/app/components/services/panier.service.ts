import { Injectable } from '@angular/core';
import {Product} from "../Models/product";
import {Router} from "@angular/router";


@Injectable({
  providedIn: 'root'
})
export class PanierService {
  public cartItems : Product[] = [];
  public AddedPopUpVisible :boolean = false;
  public constructor(private router: Router) {}

  public addItemsToCart = (product : Product) => {
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

  public getItemsFromCart(): Product[] {
    return this.cartItems;
  }

  public clearCart = () => {
    this.cartItems = [];
    this.router.navigate(['/Menu']);
  }

  public removeFromCart = (product : Product) => {
    this.cartItems = this.cartItems.filter((item) => item.id !== product.id);
    if (this.cartItems.length === 0) {
      this.router.navigate(['/Menu']);
    }
  }

  public decrementFromCart = (product : Product) => {
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

  public getTotalAmount(): string {
    let totalAmount = 0;
    if (this.cartItems) {
      this.cartItems.forEach((item: Product) => {
        totalAmount += item.quantity * item.price;
      });
    }
    return totalAmount.toFixed(2);
  }


}


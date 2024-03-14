import { Injectable } from '@angular/core';
import { Item } from '../models/item';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: Item[] = [];
  private totalSubject: BehaviorSubject<number> = new BehaviorSubject<number>(0.00);
  total$ = this.totalSubject.asObservable();

  constructor() { }

  getCart() {
    console.log("service cartItems:", this.cartItems);
    return this.cartItems;
  }

  addToCart(addedItem: Item): void {
    const existingItem = this.cartItems.find(cartItem => cartItem.id === addedItem.id);

    if(existingItem) {
      existingItem.quantity++
    } else {
      const newItem = {...addedItem, quantity: 1}
      this.cartItems.push(newItem)
    }
    this.calculateTotal();
  }

  removeFromCart(item: Item) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== item.id);
    this.calculateTotal();
  }

  calculateTotal(): void {
    const total = this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    this.totalSubject.next(total);
  }

  getTotal() {
    console.log("GET", this.total$);
    return this.totalSubject.value;
  }
}

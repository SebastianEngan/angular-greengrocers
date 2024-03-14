import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/models/item';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent{
  total: any = 0.00;

  constructor(private readonly cartService: CartService) {}
  

  ngOnInit(): void {
    this.cartService.total$.subscribe(newTotal => {
      this.total = newTotal;
    });
  }
  get cartItems(): Item[] {
    return this.cartService.cartItems
  }

  

  increaseQuantity(item: Item) {
    item.quantity++
    this.cartService.calculateTotal();
  }

  decreaseQuantity(item: Item) {
    if (item.quantity >= 1) {
      item.quantity--
      this.cartService.calculateTotal();
    }
    if (item.quantity === 0) {
      this.cartService.removeFromCart(item)
    }
  }
}

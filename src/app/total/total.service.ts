import { Injectable } from '@angular/core';
import { CartService } from '../cart/cart.service';

@Injectable({
  providedIn: 'root'
})
export class TotalService {

  constructor(private readonly cartService: CartService) { }

  calculateTotal(): number {
    return this.cartService.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0)
  }
}

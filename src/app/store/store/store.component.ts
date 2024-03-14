import {Component, OnInit} from '@angular/core';
import { StoreService } from '../store.service';
import { Item } from 'src/app/models/item';
import { CartService } from 'src/app/cart/cart.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.css']
})
export class StoreComponent implements OnInit{
  items: Item[] = [];

  constructor(private readonly storeService: StoreService, private readonly cartService: CartService) {}
  
  ngOnInit(): void {
    this.storeService.getGroceries().pipe(first()).subscribe(items => {
      this.items = items;
    });
  }

  addToCart(item: Item): void {
    this.cartService.addToCart(item);
  }

  filterByType(type: string): void {
    switch (type) {
      case 'vegetables':
        this.items = this.storeService.storeItems.filter(item => item.type === 'vegetable');
        break;
      case 'fruits':
        this.items = this.storeService.storeItems.filter(item => item.type === 'fruit');
        break;
      default:
        this.storeService.getGroceries().pipe(first()).subscribe(items => {
          this.items = items;
        });
        break;
    }
  }
}
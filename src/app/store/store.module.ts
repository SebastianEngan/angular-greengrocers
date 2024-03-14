import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreComponent } from './store/store.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreItemComponent } from './store-item/store-item.component';
import { CartModule } from '../cart/cart.module';



@NgModule({
  declarations: [
    StoreComponent,
    StoreItemComponent
  ],
  imports: [
    CommonModule, HttpClientModule, CartModule
  ],
  exports: [StoreComponent]
})
export class StoreModule { }

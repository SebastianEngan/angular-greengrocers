import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsComponent } from './items/items.component';
import { HttpClientModule } from '@angular/common/http'



@NgModule({
  declarations: [
    ItemsComponent
  ],
  imports: [
    CommonModule, HttpClientModule
  ]
})
export class ItemListModule { }

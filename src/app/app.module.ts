import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from './store/store.module';
import { StoreComponent } from './store/store/store.component';
import { HttpClientModule } from '@angular/common/http';
import { CartModule } from './cart/cart.module';
import { TotalModule } from './total/total.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StoreModule, HttpClientModule, CartModule, TotalModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

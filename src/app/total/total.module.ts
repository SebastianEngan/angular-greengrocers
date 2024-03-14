import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalComponent } from './total/total.component';



@NgModule({
  declarations: [
    TotalComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [TotalComponent]
})
export class TotalModule { }

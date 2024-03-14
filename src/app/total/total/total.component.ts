import { Component } from '@angular/core';
import { TotalService } from '../total.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.css']
})
export class TotalComponent {
  total: number = 0.00;

  constructor(private readonly totalService: TotalService) {console.log(this.total), this.total = this.totalService.calculateTotal(), console.log(this.total)}


}

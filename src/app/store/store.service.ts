import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Item } from '../models/item';
import { Observable, firstValueFrom, forkJoin } from 'rxjs';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  storeItems: Item[] = [];

  vegetables = false;
  fruits = false;

  constructor(private http: HttpClient){
    this.getGroceries().subscribe({
      next: (items: Item[]) => {
        this.storeItems = items;
        console.log(this.storeItems);
      },
      error: (error) => {
        console.error('Error fetching groceries:', error);
      }
    });
  }

  getGroceries(): Observable<Item[]> {
    const vegetables$ = this.http.get<Item[]>('https://boolean-api-server.fly.dev/groceries?type=vegetable');
    const fruits$ = this.http.get<Item[]>('https://boolean-api-server.fly.dev/groceries?type=fruit');

    return forkJoin({
      vegetables: vegetables$,
      fruits: fruits$
    }).pipe(
      first(),
      map(({ vegetables, fruits }) => [...vegetables, ...fruits])
    );
  }

}

import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from "rxjs";
import { Item } from '../models/item';
import {HttpClient, HttpErrorResponse, HttpParams} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private baseUrl = 'https://boolean-api-server.fly.dev/groceries'
  private filterType: string = "all";
  private sortBy: string = "";
  private sortAsc: boolean = true;

  constructor(
    private http: HttpClient
  ) { }

  async getGroceries(): Promise<Item[]> {
    try {
      const result = await firstValueFrom(
        this.http.get<Item[]>('https://boolean-api-server.fly.dev/groceries?type=vegetable')
      );
      console.log(result);
      return result;
    } catch (error) {
      console.error('Error occurred:', error);
      throw error; // Re-throwing error to propagate it to the caller
    }
  }

  // getAllGroceries(query?: string): Observable<Item[]> {
  //   const params = query ? new HttpParams().set('query', query) : undefined;
  //   console.log(this.http.get<Item[]>(this.baseUrl, { params }))
  //   return this.http.get<Item[]>(this.baseUrl, { params }).pipe(
  //     catchError((error: HttpErrorResponse) => {
  //       if (error.status === 400) {
  //         return throwError(() => error);
  //       }
  //       return throwError(() => 'Something went wrong. Please try again later.');
  //     })
  //   );
  // }
}

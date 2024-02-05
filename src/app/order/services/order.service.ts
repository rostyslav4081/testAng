import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map, Observable, of} from 'rxjs';
import {Order} from "../models/Order";
import {catchError} from "rxjs/operators";

@Injectable()
export class OrderService {

  private baseUrl = './../../../app/data.json';
  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<Order[]> {
    return this.getData()
      .pipe(
        map(data => data.orders),
        catchError(error => of([]))
      );
  }




  private getData(): Observable<any> {
    return new Observable(observer => {
      fetch(this.baseUrl)
        .then(response => response.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(error => {
          console.error('Error loading data:', error);
          observer.error(error);
        });
    });
  }


}

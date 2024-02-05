import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Customer } from '../models/customer';
import CustomersJson from './../../../app/customers.json';

@Injectable({
  providedIn: 'root',
})
export class CustomerService {
  private baseUrl = './../../../app/data.json';

  constructor(private http: HttpClient) {}

  getAllCustomers(): Observable<Customer[]> {
    return this.http.get(this.baseUrl).pipe(
      map((data: any) => {
        const customers = data.customers;
        console.log(data.customers);
        return customers;
      }),
      catchError((error) => {
        console.error('Error loading customers:', error);
        return of([] );
      })
    );
  }


}

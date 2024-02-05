import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {CustomerService} from "./customer.service";
import {Customer} from "../models/customer";


@Injectable({
  providedIn: 'root'
})
export class CustomerResolveService implements Resolve<Customer[]>{

  constructor(private customerService: CustomerService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Customer[]> | Promise<Customer[]> | Customer[] {
    return this.customerService.getAllCustomers();
  }
}

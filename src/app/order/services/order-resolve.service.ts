import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {Order} from "../models/Order";
import {OrderService} from "./order.service";

@Injectable({
  providedIn: 'root'
})
export class OrderResolveService implements Resolve<Order[]>{

  constructor(private activatedRoute: ActivatedRoute, private orderService: OrderService) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order[]> | Promise<Order[]> | Order[] {
    return this.orderService.getAllOrders();
  }
}


import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllOrdersComponent} from "./all-orders/all-orders/all-orders.component";
import {OrderComponent} from "./order/order.component";

import {RouterModule} from "@angular/router";
import {OrderResolveService} from "./services/order-resolve.service";


@NgModule({
  declarations: [AllOrdersComponent, OrderComponent],
  imports: [
    CommonModule,
    //HttpClientModule,
    RouterModule.forChild([
      {path: '', component: AllOrdersComponent, resolve: {fetchedOrders: OrderResolveService}},
      {path: ':id', component: OrderComponent}
    ]),

  ]
})
export class OrderModule { }

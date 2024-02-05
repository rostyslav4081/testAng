
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AllCustomersComponent} from "./all-customers/all-customers.component";
import {CustomerComponent} from "./customer/customer.component";
import {RouterModule} from "@angular/router";
import {OrderComponent} from "../order/order/order.component";
import {CustomerResolveService} from "./services/customer-resolve.service";
import {HttpClientModule} from "@angular/common/http";




@NgModule({
  declarations: [AllCustomersComponent, CustomerComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild([
      {path: '', component: AllCustomersComponent, resolve: {fetchedCustomers: CustomerResolveService}},
      {path: ':id', component: CustomerComponent},
      {path: 'orders/:id', component: OrderComponent},
    ])
  ]
})
export class CustomerModule { }

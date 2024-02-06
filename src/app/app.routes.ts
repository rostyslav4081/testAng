
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllOrdersComponent} from "./order/all-orders/all-orders/all-orders.component";
import {AllCustomersComponent} from "./customer/all-customers/all-customers.component";


export const routes: Routes = [
  { path: 'customers', component: AllCustomersComponent },
  { path: 'orders', component: AllOrdersComponent },
  { path: '', redirectTo: '/customers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

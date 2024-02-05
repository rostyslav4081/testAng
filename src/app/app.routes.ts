
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AllOrdersComponent} from "./order/all-orders/all-orders/all-orders.component";
import {AllCustomersComponent} from "./customer/all-customers/all-customers.component";


export const routes: Routes = [
  { path: 'all-customers', component: AllCustomersComponent },
  { path: 'all-orders', component: AllOrdersComponent },
  { path: '', redirectTo: '/all-customers', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'customers', loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule) },
      { path: 'orders', loadChildren: () => import('./order/order.module').then(m => m.OrderModule) }
    ])
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }

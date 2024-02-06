import { Component, OnInit } from '@angular/core';
import { OrderService } from "../../services/order.service";
import { Order } from "../../models/Order";

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
  orders: Order[];

  constructor(private orderService: OrderService) {
    this.orders=[];
    this.loadOrders();

  }

  ngOnInit(): void {

  }

  loadOrders(): void {
    // Use getOrders instead of getCustomers
    this.orderService.getAllOrders().subscribe(
      orders => this.orders = orders,
      error => console.error('Error fetching orders', error)
    );
  }
}

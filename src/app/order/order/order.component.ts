import {Component, Input, OnInit} from '@angular/core';
import {Order} from "../models/Order";



@Component({
  selector: 'app-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements  OnInit{

  @Input() order!: Order;
  constructor() {

  }
  ngOnInit(): void {

  }

}

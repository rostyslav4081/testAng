import {Component, Input, OnInit} from '@angular/core';

import {Customer} from "../models/customer";
import {CustomerService} from "../services/customer.service";



@Component({
  selector: 'app-all-customers',
  templateUrl: './all-customers.component.html',
  styleUrls: ['./all-customers.component.css']
})
export class AllCustomersComponent implements OnInit {

  customers: Customer[];

  constructor(private customerServices: CustomerService){
    this.customers=[];
    this.customerServices.getAllCustomers().subscribe((data)=>{this.customers=data})
  }
  ngOnInit() {

  }


}

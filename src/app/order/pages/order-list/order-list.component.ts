import { Component, OnInit } from '@angular/core';
import { IOrder } from '../../model/order.model';
import { OrderService } from '../../services/order.service';
import { IResponse } from 'src/app/shared/model/response.model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css'],
})
export class OrderListComponent implements OnInit {
  orders: IOrder[] = [];
  constructor(private orderService: OrderService) {}

  ngOnInit(): void {
    this.getOrders();
  }

  getOrders() {
    this.orderService.getAll().subscribe(({ data }: IResponse<IOrder[]>) => {
      this.orders = data;
    });
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { OrderListComponent } from './pages/order-list/order-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [OrderListComponent],
  imports: [CommonModule, OrderRoutingModule, SharedModule],
})
export class OrderModule {}

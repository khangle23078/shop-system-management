import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductAddComponent } from './product-add/product-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from './product-edit/product-edit.component';

@NgModule({
  declarations: [ProductListComponent, ProductAddComponent, ProductEditComponent],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ProductModule {}

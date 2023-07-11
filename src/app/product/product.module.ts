import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';
import { ProductListComponent } from './pages/product-list/product-list.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class ProductModule {}

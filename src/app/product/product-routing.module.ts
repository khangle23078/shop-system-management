import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { ProductAddComponent } from './pages/product-add/product-add.component';
import { ProductEditComponent } from './pages/product-edit/product-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
  },
  {
    path: 'add',
    component: ProductAddComponent,
  },
  {
    path: 'edit/:id',
    component: ProductEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}

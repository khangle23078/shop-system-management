import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { SharedModule } from '../shared/shared.module';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryAddComponent } from './pages/category-add/category-add.component';

@NgModule({
  declarations: [CategoryListComponent, CategoryEditComponent, CategoryAddComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CategoryRoutingModule,
    SharedModule,
  ],
})
export class CategoryModule {}

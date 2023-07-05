import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { CategoryEditComponent } from './pages/category-edit/category-edit.component';
import { CategoryAddComponent } from './pages/category-add/category-add.component';

const routes: Routes = [
  {
    path: '',
    component: CategoryListComponent,
  },
  {
    path: 'add',
    component: CategoryAddComponent,
  },
  {
    path: 'edit/:id',
    component: CategoryEditComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CategoryRoutingModule {}

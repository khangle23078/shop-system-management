import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'auth',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'admin',
    component: LayoutComponent,
    children: [
      {
        path: 'category',
        loadChildren: () =>
          import('./category/category.module').then((m) => m.CategoryModule),
      },
      {
        path: 'product',
        loadChildren: () =>
          import('./product/product.module').then((m) => m.ProductModule),
      },
      {
        path: 'order',
        loadChildren: () =>
          import('./order/order.module').then((m) => m.OrderModule),
      },
      {
        path: '',
        redirectTo: 'product',
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

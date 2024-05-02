import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BaseLayout } from './shared/layouts/base/base.layout';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  },
  {
    path: '',
    component: BaseLayout,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./products/products.module').then((m) => m.ProductsModule)
      }
    ]
  },
  {
    path: '**',
    loadChildren: () =>
      import('./page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

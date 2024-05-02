import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductsListRoutingModule } from './products-list-routing.module';
import { ProductsListComponent } from './products-list.component';
import { ProductsComponentsModule } from '../../components/products-components.module';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [CommonModule, ProductsListRoutingModule, ProductsComponentsModule]
})
export class ProductsListModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ProductDetailRoutingModule } from './product-detail-routing.module';
import { ProductDetailComponent } from './product-detail.component';
import { ProductsComponentsModule } from '../../components/products-components.module';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [CommonModule, ProductDetailRoutingModule, ProductsComponentsModule]
})
export class ProductDetailModule {}

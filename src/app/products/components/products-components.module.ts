import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductCardComponent } from './product-card/product-card.component';
import { ProductImgComponent } from './product-img/product-img.component';
import { ProductsCarouselComponent } from './products-carousel/products-carousel.component';
import { ProductsFilterComponent } from './products-filter/products-filter.component';

@NgModule({
  declarations: [
    ProductCardComponent,
    ProductsCarouselComponent,
    ProductsFilterComponent,
    ProductImgComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ProductCardComponent,
    ProductsCarouselComponent,
    ProductsFilterComponent
  ]
})
export class ProductsComponentsModule {}

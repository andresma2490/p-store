import { Component, Input } from '@angular/core';

import { Product } from '../../models/product';

@Component({
  selector: 'app-products-carousel',
  templateUrl: './products-carousel.component.html',
  styleUrls: ['./products-carousel.component.scss']
})
export class ProductsCarouselComponent {
  @Input() product!: Product;
  activeIndex = 0;
}

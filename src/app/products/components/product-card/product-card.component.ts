import { Component, Input } from '@angular/core';

import { Product } from '../../models/product';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent {
  @Input() product!: Product;
  defaultImageUrl = 'https://dummyimage.com/600x400/5c636a/fff';

  onImageError(event: any) {
    event.target.src = this.defaultImageUrl;
  }
}

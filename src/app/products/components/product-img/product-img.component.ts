import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-img',
  templateUrl: './product-img.component.html',
  styleUrls: ['./product-img.component.scss']
})
export class ProductImgComponent {
  @Input() src!: string;
  @Input() alt: string = '';
  @Input() class: string = '';
  @Input() style: string = '';

  defaultImageUrl = 'https://dummyimage.com/600x400/5c636a/fff';

  onImageError(event: any) {
    event.target.src = this.defaultImageUrl;
  }
}

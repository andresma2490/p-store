import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, switchMap, tap } from 'rxjs';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  productId$: Observable<number> = this.route.paramMap.pipe(
    map((paramMap) => Number(paramMap.get('productId')))
  );
  product$: Observable<Product> = this.productId$.pipe(
    switchMap((id) => this.productsService.getProduct(id))
  );
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.product$.subscribe((product) => {
      this.product = product;
    });
  }
}

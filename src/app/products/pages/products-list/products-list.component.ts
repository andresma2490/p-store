import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject, takeUntil, tap } from 'rxjs';

import { Category } from '../../models/category';
import { PriceForm } from '../../models/utils';
import { CategoriesService } from '../../services/categories.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  destroy$: Subject<void> = new Subject();
  productList$ = this.productsService.productList$;
  categories: Category[] = [];
  category: Category | null = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.route.queryParams
      .pipe(
        tap((params) => this.getProducts(params)),
        takeUntil(this.destroy$)
      )
      .subscribe();
    this.getCategories();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  getCategories() {
    this.categoriesService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  setCategory(category: Category | null) {
    this.category = category;
    if (category) {
      this.getProducts({ categoryId: category?.id });
    } else {
      this.getProducts();
    }
  }

  setPrices(priceForm: PriceForm) {
    this.getProducts({
      price_min: priceForm.minPrice,
      price_max: priceForm.maxPrice
    });
  }

  getProducts(filters: any = {}) {
    const defaultFilters = { limit: 15, offset: 0 };
    filters = { ...defaultFilters, ...filters };

    this.productsService.getProducts(filters);
  }
}

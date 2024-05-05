import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = `${environment.API_URL}/${environment.API_VERSION}/products`;
  private productList = new BehaviorSubject<Product[]>([]);
  productList$ = this.productList.asObservable();

  constructor(private http: HttpClient) {}

  getProducts(params: any) {
    return this.http
      .get<Product[]>(this.apiUrl, {
        params
      })
      .subscribe((products) => {
        this.productList.next(products);
      });
  }

  getProduct(id: number) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
}

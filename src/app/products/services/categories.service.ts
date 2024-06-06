import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private apiUrl = `${environment.API_URL}/${environment.API_VERSION}/categories`;

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get<Category[]>(this.apiUrl);
  }

  getProductsByCategory() {
    throw new Error('method not implemented');
  }
}

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { debounceTime, tap } from 'rxjs';
import { ProductsService } from 'src/app/products/services/products.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  searchControl = new FormControl('');

  constructor(
    private router: Router,
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.searchControl.valueChanges
      .pipe(
        tap(() => {
          const homeUrl = '/products';
          if (this.router.url !== homeUrl) {
            this.router.navigateByUrl(homeUrl);
          }
        }),
        debounceTime(700)
      )
      .subscribe((value) => {
        this.productsService.getProducts({
          title: value,
          limit: 15,
          offset: 0
        });
      });
  }

  toggleTheme() {
    const theme = document.body.getAttribute('data-bs-theme');
    if (theme === 'dark') {
      document.body.setAttribute('data-bs-theme', 'light');
    } else if (theme === 'light') {
      document.body.setAttribute('data-bs-theme', 'dark');
    }
  }
}

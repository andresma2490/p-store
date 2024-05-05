import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  toggleTheme() {
    const theme = document.body.getAttribute('data-bs-theme');
    if (theme === 'dark') {
      document.body.setAttribute('data-bs-theme', 'light');
    } else if (theme === 'light') {
      document.body.setAttribute('data-bs-theme', 'dark');
    }
  }
}

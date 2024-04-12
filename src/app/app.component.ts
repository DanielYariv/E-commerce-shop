import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { MenubarModule } from 'primeng/menubar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    NgbAlert,
    MenubarModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  items = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/home',
    },
    {
      label: 'Products',
      icon: 'pi pi-th-large',
      routerLink: '/products',
      items: [
        {
          label: 'Electronics',
          icon: 'pi pi-desktop',
          routerLink: '/products/Electronics',
          items: [
            {
              label: 'Apple',
              icon: 'pi pi-apple',
              routerLink: '/products/Electronics/Apple',
            },
            {
              label: 'Android',
              icon: 'pi pi-android',
              routerLink: '/products/Electronics/Android',
            },
          ],
        },
        {
          label: 'Clothing',
          icon: 'pi pi-shopping-cart',
          routerLink: '/products/Clothing',
          items: [
            {
              label: 'Men',
              icon: 'pi pi-user',
              routerLink: '/products/Clothing/Men',
            },
            {
              label: 'Women',
              icon: 'pi pi-user',
              routerLink: '/products/Clothing/Women',
            },
            {
              label: 'Kids',
              icon: 'pi pi-user',
              routerLink: '/products/Clothing/Kids',
            },
          ],
        },
      ],
    },
    {
      label: 'Cart',
      icon: 'pi pi-shopping-cart',
      routerLink: '/cart',
    },
  ];
}

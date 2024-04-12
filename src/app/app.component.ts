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
          routerLink: '/electronics',
          items: [
            {
              label: 'Apple',
              icon: 'pi pi-apple',
              routerLink: '/electronics/apple',
            },
            {
              label: 'Samsung',
              icon: 'pi pi-android',
              routerLink: '/electronics/samsung',
            },
          ],
        },
        {
          label: 'Clothing',
          icon: 'pi pi-shopping-cart',
          routerLink: '/clothing',
          items: [
            {
              label: 'Men',
              icon: 'pi pi-user',
              routerLink: '/electronics',
            },
            {
              label: 'Women',
              icon: 'pi pi-user',
              routerLink: '/electronics',
            },
            {
              label: 'Kids',
              icon: 'pi pi-user',
              routerLink: '/electronics',
            },
          ],
        },
      ],
    },
    {
      label: 'Cart',
      icon: 'pi pi-shopping-cart',
      routerLink: '/cart-component',
    },
  ];
}

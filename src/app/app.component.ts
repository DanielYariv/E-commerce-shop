import { Component, OnInit, effect, inject } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

import { MenubarModule } from 'primeng/menubar';

import { MenuItem } from './interfaces/menuItem.interface';

import { CartService } from './services/cart.service';

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
export class AppComponent implements OnInit {
  items: MenuItem[] = [
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
      badge: '',
      styleClass: 'badge-class',
    },
  ];
  cartService = inject(CartService);
  cartItemsCounter = this.cartService.productsInCartCounter; //Assign the signal from `cartService` that tracks the number of items in the cart reactively.

  ngOnInit(): void {
    this.cartService.setProductInCart();
  }

  e = effect(() => {
    const index = this.items.findIndex((item) => item.label === 'Cart');
    if (index !== -1) {
      const updatedItems: MenuItem[] = [...this.items]; // immutable update -  Angular didn't update the view because it didn't detects the change so i change the reference to the array by spread the old items into a new array and add the new item
      updatedItems[index] = {
        ...updatedItems[index],
        badge:
          this.cartItemsCounter() > 0 ? `(${this.cartItemsCounter()})` : '',
      };
      this.items = updatedItems;
    }
  });
}

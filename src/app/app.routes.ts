import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
  {
    path: 'products',
    loadComponent: () =>
      import('./products/products.component').then((c) => c.ProductsComponent),
  },
  {
    path: 'products/:category',
    loadComponent: () =>
      import('./products/products.component').then((c) => c.ProductsComponent),
  },
  {
    path: 'products/:category/:subCategory',
    loadComponent: () =>
      import('./products/products.component').then((c) => c.ProductsComponent),
  },
  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart.component').then((c) => c.CartComponent),
  },
];

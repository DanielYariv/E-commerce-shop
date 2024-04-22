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
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./products/products.component').then(
            (c) => c.ProductsComponent
          ),
      },
      {
        path: ':category',
        children: [
          {
            path: '',
            loadComponent: () =>
              import('./products/products.component').then(
                (c) => c.ProductsComponent
              ),
          },
          {
            path: ':sub-category',
            loadComponent: () =>
              import('./products/products.component').then(
                (c) => c.ProductsComponent
              ),
          },
        ],
      },
    ],
  },

  {
    path: 'cart',
    loadComponent: () =>
      import('./cart/cart.component').then((c) => c.CartComponent),
  },
];

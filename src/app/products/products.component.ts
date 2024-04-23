import { Component, Input, OnInit, OnDestroy, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { DataViewModule } from 'primeng/dataview';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Product } from '../interfaces/product.interface';

import { ProductListLayoutComponent } from '../product-list-layout/product-list-layout.component';
import { ProductGridLayoutComponent } from '../product-grid-layout/product-grid-layout.component';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    DataViewModule,
    ToastModule,
    ProductListLayoutComponent,
    ProductGridLayoutComponent,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [MessageService],
})
export class ProductsComponent implements OnInit, OnDestroy {
  @Input() products: Product[] = [];

  productsService = inject(ProductsService);
  cartService = inject(CartService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  messageService = inject(MessageService);

  category!: string;
  subCategory!: string;
  filteredProducts!: Product[];
  routeSubscription: Subscription = new Subscription();

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (this.router.url !== '/home') {
          //if the user choose home, skip the code below because the products need to include only the best sellers products, get it from the  the home component
          this.category = params.get('category')!;
          this.subCategory = params.get('sub-category')!;
          this.updateProductList();
        }
        this.filteredProducts = this.products;
      }
    );
  }

  //update the product list based on the menu item the user choose
  updateProductList(): void {
    if (this.subCategory) {
      // based on the subCategory
      this.products = this.productsService.getByCategoryAndSubCategory(
        this.category,
        this.subCategory
      );
    } else if (this.category) {
      // based on Category
      this.products = this.productsService.getByCategory(this.category);
    } else {
      // all products
      this.products = this.productsService.getProducts();
    }
  }

  onSearch(event: Event) {
    let query = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.Name.toLowerCase().includes(query)
    );
  }

  addProductToCart(product: Product) {
    this.cartService.addProductToCart(product);
    this.messageService.add({
      severity: 'success',
      summary: 'Added to Cart',
      detail: `${product.Name} has been added to your cart.`,
    });
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}

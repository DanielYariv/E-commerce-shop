import { Component, Input, OnInit, OnDestroy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Subscription } from 'rxjs';

import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

import { ProductsService } from '../services/products.service';
import { CartService } from '../services/cart.service';
import { Product } from '../interfaces/product.interface';
@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    DataViewModule,
    RatingModule,
    FormsModule,
    TagModule,
    DialogModule,
    ToastModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
  providers: [MessageService],
})
export class ProductsComponent implements OnInit, OnDestroy {
  @Input() products: any[] = [];

  productsService = inject(ProductsService);
  cartService = inject(CartService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  messageService = inject(MessageService);

  category!: string;
  subCategory!: string;
  filteredProducts!: Product[];
  routeSubscription: Subscription = new Subscription();

  selectedProduct!: Product;
  visible: boolean = false; // for the dialog that give more details about the product

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

  //render to screen the product list
  updateProductList(): void {
    if (this.subCategory) {
      // render based on the subCategory
      this.products = this.productsService.getByCategoryAndSubCategory(
        this.category,
        this.subCategory
      );
    } else if (this.category) {
      //render based on Category
      this.products = this.productsService.getByCategory(this.category);
    } else {
      //render all products
      this.products = this.productsService.getProducts();
    }
  }

  onSearch(event: Event) {
    let query = (event.target as HTMLInputElement).value.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.Name.toLowerCase().includes(query)
    );
  }

  //when the user click on the product img - show more details about specific product
  showDialog(product: Product) {
    this.selectedProduct = product;
    this.visible = true;
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

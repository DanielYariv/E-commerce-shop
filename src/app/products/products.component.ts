import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import { ProductsService } from './../products.service';
import { CartService } from './../cart.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';

import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    NgbAlert,
    DataViewModule,
    RatingModule,
    FormsModule,
    TagModule,
    DialogModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit, OnDestroy {
  @Input() products: any[] = [];

  category: string | null = null;
  subCategory: string | null = null;
  filteredProducts: any[] = [];
  routeSubscription: Subscription = new Subscription();

  selectedProduct: any;
  visible: boolean = false; // for the dialog that give more details about the product

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeSubscription = this.activatedRoute.paramMap.subscribe(
      (params) => {
        if (this.router.url != '/home') {
          //if the user choose home, skip the code below because the products need to include only the best sellers products, get it from the  the home component
          this.category = params.get('category');
          this.subCategory = params.get('subCategory');
          this.updateProductList();
        }
        this.filteredProducts = this.products;
      }
    );
  }

  //render to screen the product list based on the subCategory, if null based on Category, if null show all products
  updateProductList() {
    if (this.subCategory) {
      this.products = this.productsService.getByCategoryAndSubCategory(
        this.category,
        this.subCategory
      );
    } else if (this.category) {
      this.products = this.productsService.getByCategory(this.category);
    } else {
      this.products = this.productsService.getProducts();
    }
  }

  onSearch(event: any) {
    let query = event.target.value.toLowerCase();
    this.filteredProducts = this.products.filter((product) =>
      product.Name.toLowerCase().includes(query)
    );
  }

  //show more details about specific product
  showDialog(product: any) {
    this.selectedProduct = product;
    this.visible = true;
  }

  addProductToCart(product: any) {
    this.cartService.addProductToCart(product);
  }

  ngOnDestroy(): void {
    if (this.routeSubscription) {
      this.routeSubscription.unsubscribe();
    }
  }
}

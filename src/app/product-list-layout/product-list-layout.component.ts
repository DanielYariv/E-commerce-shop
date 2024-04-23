import { Component, EventEmitter, Input, Output } from '@angular/core';

import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { DialogModule } from 'primeng/dialog';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';

import { Product } from '../interfaces/product.interface';

@Component({
  selector: 'app-product-list-layout',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    RatingModule,
    ButtonModule,
  ],
  templateUrl: './product-list-layout.component.html',
  styleUrl: './product-list-layout.component.css',
})
export class ProductListLayoutComponent {
  @Input() products: Product[] = [];
  @Output() onAddToCart = new EventEmitter<Product>();
  @Output() onShowDialog = new EventEmitter<Product>();

  selectedProduct!: Product;
  visible: boolean = false; // for the dialog that give more details about the product

  //when the user click on the product img - show more details about specific product
  showDialog(product: Product) {
    this.visible = true;
    this.selectedProduct = product;
  }
  //send the clicked product data to the addProductToCart in the products component
  addProductToCart(product: Product) {
    this.onAddToCart.emit(product);
  }
}

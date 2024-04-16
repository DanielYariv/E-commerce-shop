import { Component, OnInit, inject, signal } from '@angular/core';
import { Product } from '../interfaces/product.interface';
import { CartService } from './../cart.service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';
@Component({
  selector: 'app-cart',
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
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartService = inject(CartService);
  productsInCart = this.cartService.productsInCart;

  ngOnInit(): void {
    //his.productsInCart.set(this.cartService.setProductInCart());
  }

  removeProduct(product: Product) {
    this.cartService.deleteProductFromCart(product);
  }
}

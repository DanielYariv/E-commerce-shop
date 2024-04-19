import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { DialogModule } from 'primeng/dialog';

import { CheckOutComponent } from '../check-out/check-out.component';
import { Product } from '../interfaces/product.interface';
import { CartService } from '../services/cart.service';
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    DataViewModule,
    RatingModule,
    TagModule,
    DialogModule,
    CheckOutComponent,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent {
  cartService = inject(CartService);
  productsInCart = this.cartService.productsInCart;
  isCheckOut: boolean = false;
  visible: boolean = false;
  totalPayment!: number;

  removeProduct(product: Product) {
    this.cartService.deleteProductFromCart(product);
  }

  CheckOut() {
    this.isCheckOut = true;
    this.visible = true;
  }
  onFormSubmitted(isSubmitted: boolean) {
    this.visible = isSubmitted;
  }
}

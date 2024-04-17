import { Component, inject } from '@angular/core';
import { CheckOutComponent } from '../check-out/check-out.component';
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

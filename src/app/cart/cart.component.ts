import { Product } from '../interfaces/product.interface';
import { CartService } from './../cart.service';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartService = inject(CartService);
  productsInCart!: Product[];

  ngOnInit(): void {
    this.productsInCart = this.cartService.getProductsInCart();
    console.log(this.productsInCart);
  }
}

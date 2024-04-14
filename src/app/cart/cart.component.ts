import { CartService } from './../cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  productsInCart: any[] = [];
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.productsInCart = this.cartService.getProductsInCart();
    console.log(this.productsInCart);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private productsInCart!: Product[];
  private productsInCartCounter = new BehaviorSubject<number>(0);
  constructor() {}

  getProductsInCart() {
    return this.productsInCart;
  }

  addProductToCart(product: Product) {
    this.productsInCart.push(product);
    this.productsInCartCounter.next(this.productsInCart.length);
  }

  deleteProductFromCart(product: Product) {
    const index = this.findIndex(product);

    if (index !== -1) {
      this.productsInCart.splice(index, 1);
      this.productsInCartCounter.next(this.productsInCart.length);
    }
  }

  findIndex(product: Product) {
    return this.productsInCart.findIndex(
      (p) => p.ProductID === product.ProductID
    );
  }

  getProductsInCartCounter() {
    return this.productsInCartCounter;
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private productsInCart: any[] = [];
  private productsInCartCounter = new BehaviorSubject<number>(0);
  constructor() {}

  getProductsInCart() {
    return this.productsInCart;
  }

  addProductToCart(product: object) {
    this.productsInCart.push(product);
    this.productsInCartCounter.next(this.productsInCart.length);
  }

  deleteProductFromCart(product: object) {
    const index = this.findIndex(product);

    if (index !== -1) {
      this.productsInCart.splice(index, 1);
      this.productsInCartCounter.next(this.productsInCart.length);
    }
  }

  findIndex(product: any) {
    return this.productsInCart.findIndex(
      (p) => p.ProductID === product.ProductID
    );
  }

  getProductsInCartCounter() {
    return this.productsInCartCounter;
  }
}

import { Injectable, computed, effect, signal } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productsInCart = signal<Product[]>([]);
  productsInCartCounter = computed(() => this.productsInCart().length); //Defines a reactive computed signal that updates its value to the length of `productsInCart` whenever `productsInCart` changes
  totalPrice = computed(() => {
    const total = this.productsInCart().reduce(
      (total, product) => total + product.Price,
      0
    );
    return Math.floor(total * 100) / 100; // round the total price to two digit max after point
  });

  addProductToCart(product: Product) {
    this.productsInCart.update((values) => {
      return [...values, product];
    });

    localStorage.setItem(
      'productsInCart',
      JSON.stringify(this.productsInCart())
    );
  }

  setProductInCart() {
    const data = localStorage.getItem('productsInCart');
    if (data) {
      this.productsInCart.set(JSON.parse(data));
    }
  }

  deleteProductFromCart(product: Product) {
    this.productsInCart.update((values) => {
      const index = this.findIndex(product);
      if (index !== -1) {
        values.splice(index, 1);
      }
      localStorage.setItem(
        'productsInCart',
        JSON.stringify(this.productsInCart())
      );
      return [...values];
    });
  }

  findIndex(product: Product) {
    return this.productsInCart().findIndex(
      (p) => p.ProductID === product.ProductID
    );
  }

  clearCartAfterPurchase() {
    this.productsInCart.set([]);
    localStorage.removeItem('productsInCart');
  }
}

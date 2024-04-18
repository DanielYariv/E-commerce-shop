import { Injectable, computed, signal } from '@angular/core';
import { Product } from './interfaces/product.interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  productsInCart = signal<Product[]>([]);
  productsInCartCounter = computed(() =>
    this.productsInCart().reduce(
      (total, product) => total + (product.quantity || 0),
      0
    )
  ); //Defines a reactive computed signal that updates its value to the length of `productsInCart` whenever `productsInCart` changes
  totalPrice = computed(() => {
    const total = this.productsInCart().reduce(
      (total, product) => total + product.Price * (product.quantity || 1),
      0
    );
    console.log(total);
    return Math.floor(total * 100) / 100; // round the total price to two digit max after point
  });

  addProductToCart(product: Product) {
    this.productsInCart.update((values) => {
      const existingProductIndex = values.findIndex(
        (p) => p.ProductID === product.ProductID
      );
      if (existingProductIndex !== -1) {
        values[existingProductIndex].quantity =
          (values[existingProductIndex].quantity || 0) + 1;
      } else {
        const newProduct = { ...product, quantity: 1 };
        values.push(newProduct);
      }
      localStorage.setItem('productsInCart', JSON.stringify(values));
      return [...values];
    });
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

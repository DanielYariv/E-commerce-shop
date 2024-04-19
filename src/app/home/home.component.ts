import { Component, OnInit, inject } from '@angular/core';

import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../services/products.service';
import { Product } from '../interfaces/product.interface';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ProductsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  productsService = inject(ProductsService);
  bestSellers!: Product[];

  ngOnInit(): void {
    this.bestSellers = this.productsService.getBestSellers();
  }
}

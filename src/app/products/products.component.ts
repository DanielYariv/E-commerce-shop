import { Component, Input, OnInit } from '@angular/core';

import { ProductsService } from './../products.service';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { PaginatorModule } from 'primeng/paginator';

import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

import { ProductComponent } from '../product/product.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    NgbAlert,
    ProductComponent,
    DataViewModule,
    RatingModule,
    FormsModule,
    TagModule,
    PaginatorModule,
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  @Input() products: any[] = [];
  category: string | null = null;
  subCategory: string | null = null;
  constructor(
    private productsService: ProductsService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.findCategory();
    this.findSubCategory();

    if (this.category === 'Electronics') {
      this.products = this.productsService.getByCategory(this.category);
    }

    if (this.subCategory != null) {
      this.products = this.productsService.getByCategoryAndSubCategory(
        this.category,
        this.subCategory
      );
      console.log(this.products);
    }

    if (this.products.length == 0) {
      this.products = this.productsService.getProducts();
    }
  }

  findCategory() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.category = params.get('category');
      console.log(this.category);
    });
  }
  findSubCategory() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.subCategory = params.get('subCategory');
      console.log(this.subCategory);
    });
  }
}

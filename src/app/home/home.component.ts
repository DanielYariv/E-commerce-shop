import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';
import { TagModule } from 'primeng/tag';
import { PaginatorModule } from 'primeng/paginator';

import { NgbAlert } from '@ng-bootstrap/ng-bootstrap';

import { ProductsComponent } from '../products/products.component';
import { ProductsService } from '../products.service';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    ButtonModule,
    NgbAlert,
    ProductsComponent,
    DataViewModule,
    RatingModule,
    FormsModule,
    TagModule,
    PaginatorModule,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  bestSellers: any[] = [];
  constructor(private productsService: ProductsService) {}

  ngOnInit(): void {
    this.bestSellers = this.productsService.getBestSellers();
  }
}

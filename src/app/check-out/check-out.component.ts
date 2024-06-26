import { Component, EventEmitter, OnInit, Output, inject } from '@angular/core';

import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';

import {
  FormGroup,
  FormBuilder,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-check-out',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './check-out.component.html',
  styleUrl: './check-out.component.css',
})
export class CheckOutComponent implements OnInit {
  router = inject(Router);
  cartService = inject(CartService);
  formBuilder = inject(FormBuilder);
  @Output() formSubmitted = new EventEmitter<boolean>(); //listen to form submitted - close the check out dialog in cart

  checkOutForm!: FormGroup;
  totalAmount = this.cartService.totalPrice; // Accessing the current value of totalPrice
  purchaseComplete = false;

  ngOnInit(): void {
    // Initialize the form structure with form controls and validation rules
    this.checkOutForm = this.formBuilder.group({
      checkOutData: this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        creditCard: ['', [Validators.required, Validators.pattern(/^\d{16}$/)]], //16 numbers pattern for the creditCard
      }),
    });
  }

  onSubmit() {
    console.log(this.checkOutForm.value);
    this.purchaseComplete = true;
    setTimeout(() => {
      this.checkOutForm.reset();
      this.formSubmitted.emit(false);
      this.cartService.clearCartAfterPurchase();
      this.router.navigate(['/']);
    }, 3000);
  }
}

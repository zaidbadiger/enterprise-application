import { Component, OnInit } from '@angular/core';
import { PaymentInfoService } from '../services/payment-info/payment-info.service';
import { ShippingService } from '../services/shipping/shipping.service';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Address } from '../shared/models/Address';
import { Payment } from '../shared/models/Payment';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, TitleStrategy } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {

  cart! : Cart;
  address! : Address;
  payment! : Payment;


  constructor(private paymentInfoService: PaymentInfoService, private shippingService : ShippingService, private cartService : CartService, private formBuilder: FormBuilder, private router: Router) {
    this.updateInfo();
  }

  confirmationForm = this.formBuilder.nonNullable.group({
  })

  ngOnInit(): void {
  }

  updateInfo() {
    this.address = this.shippingService.getShippingInfo();
    this.payment = this.paymentInfoService.getPaymentInfo();
    this.cart = this.cartService.getCart();
  }

  onSubmit() {
    this.cartService.emptyCart();
    this.router.navigate(['/catalog']);
  }
}

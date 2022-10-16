import { Component, OnInit } from '@angular/core';
import { PaymentInfoService } from '../services/payment-info/payment-info.service';
import { ShippingService } from '../services/shipping/shipping.service';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Address } from '../shared/models/Address';
import { Payment } from '../shared/models/Payment';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {

  cart! : Cart;
  address! : Address;
  payment! : Payment;


  constructor(private paymentInfoService: PaymentInfoService, private shippingService : ShippingService, private cartService : CartService) {
    this.updateInfo();
  }

  ngOnInit(): void {
  }

  updateInfo() {
    this.address = this.shippingService.getShippingInfo();
    this.payment = this.paymentInfoService.getPaymentInfo();
    this.cart = this.cartService.getCart();
  }
}

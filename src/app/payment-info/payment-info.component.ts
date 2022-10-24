import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { PaymentInfoService } from '../services/payment-info/payment-info.service';
import { ApiService } from '../services/api/api.service';
import { ShippingService } from '../services/shipping/shipping.service';
import { CartService } from '../services/cart/cart.service';
import { Payment } from '../shared/models/Payment';
import { Router, TitleStrategy } from '@angular/router';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';
import { Item } from '../shared/models/Item';
import { Address } from '../shared/models/Address';
import { Order } from '../shared/models/Order';
import { ModuleTeardownOptions } from '@angular/core/testing';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {

  private payment : Payment = new Payment();
  cart! : Cart;
  orderId! : number;
  address! : Address;
  item : Item[] = [];
  fullPost! : Order;
  public order!: Order;


  constructor(
    private formBuilder: FormBuilder,
    private paymentInfoService: PaymentInfoService,
    private apiService: ApiService,
    private shippingService : ShippingService,
    private cartService : CartService,
    private router: Router
  ) { }

  paymentForm = this.formBuilder.nonNullable.group({
    cardHolder: 'Jane Doe',
    cardNumber: '1234123412341234',
    expirationDate: '10/16/2022',
    cvv: '123'
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.fullPost = new Order();
    this.payment.cardHolder = this.paymentForm.value.cardHolder!;
    this.payment.cardNumber = this.paymentForm.value.cardNumber!;
    this.payment.expirationDate = this.paymentForm.value.expirationDate!;
    this.payment.cvv = this.paymentForm.value.cvv!;
    this.paymentInfoService.setPaymentInfo(this.payment);
    this.orderId = Math.floor(Math.random() * (100000000000 - 900000000000)) + 900000000000;
    this.address = this.shippingService.getShippingInfo();
    this.cart = this.cartService.getCart();
    for (let i = 0; i < this.cart.items.length; i++) {
      this.item[i] = this.cart.items[i].item;
    }

    this.fullPost = {
      id: this.orderId,
      address: this.address,
      payment: this.payment,
      items: this.item
    }

    console.log(this.fullPost);
    this.apiService.sendOrder(this.fullPost).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.router.navigate(['/confirmation']);
  }
}

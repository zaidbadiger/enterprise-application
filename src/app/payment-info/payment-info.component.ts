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
import { Address } from '../shared/models/Address';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {

  private payment : Payment = new Payment();
  cartJSON!: String;
  cart! : Cart;
  orderId! : string;
  address! : Address;
  fullPost! : any;


  constructor(
    private formBuilder: FormBuilder,
    private paymentInfoService: PaymentInfoService,
    private apiService: ApiService,
    private shippingService : ShippingService, 
    private cartService : CartService,
    private router: Router
  ) { }

  paymentForm = this.formBuilder.nonNullable.group({
    cardHolder: 'Jacob Whitley',
    cardNumber: '1234123412341234',
    expirationDate: '10/16/2022',
    cvv: '123'
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.payment.cardHolder = this.paymentForm.value.cardHolder!;
    this.payment.cardNumber = this.paymentForm.value.cardNumber!;
    this.payment.expirationDate = this.paymentForm.value.expirationDate!;
    this.payment.cvv = this.paymentForm.value.cvv!;
    this.paymentInfoService.setPaymentInfo(this.payment);
    this.orderId = "1";
    this.address = this.shippingService.getShippingInfo();
    this.cart = this.cartService.getCart();
    this.cartJSON = JSON.stringify({cart: this.cart});
    this.fullPost = Object.assign({"id": this.orderId}, this.address, this.payment, this.cart);
    // JSON.stringify({address:this.address}), 
    // JSON.stringify({payment:this.payment}), 
    // JSON.stringify({cart:this.cart}));
    console.log(this.cart);
    this.apiService.sendOrder(this.fullPost).subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    );
    this.router.navigate(['/confirmation']);
  }
}

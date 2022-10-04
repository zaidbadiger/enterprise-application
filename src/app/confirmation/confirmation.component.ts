import { Component, OnInit } from '@angular/core';
import { PaymentInfoService } from '../services/payment-info.service';
import { Payment } from '../shared/models/Payment';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  payment: Payment;
  constructor(private paymentInfoService: PaymentInfoService) {
    this.payment = this.paymentInfoService.getPaymentInfo();
  }

  ngOnInit(): void {
    this.payment = this.paymentInfoService.getPaymentInfo();
  }

  updatePaymentInfo(){
    this.payment = this.paymentInfoService.getPaymentInfo();
  }


}

import { Injectable } from '@angular/core';
import { Payment } from '../../shared/models/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentInfoService {

  private payment : Payment = new Payment();

  setPaymentInfo(payment : Payment){
    this.payment.cardHolder = payment.cardHolder;
    this.payment.cardNumber = payment.cardNumber;
    this.payment.expirationDate = payment.expirationDate;
    this.payment.cvv = payment.cvv;
  }

  getPaymentInfo() {
    return this.payment;
  }
}

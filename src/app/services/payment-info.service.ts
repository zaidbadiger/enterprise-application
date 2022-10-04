import { Injectable } from '@angular/core';
import { Payment } from '../shared/models/Payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentInfoService {

  paymentInfo: Payment = new Payment();

  setPaymentInfo(cardHolder:String, cardNumber: String, cvv: String, expirationDate: String){
    this.paymentInfo.cardHolder = cardHolder;
    this.paymentInfo.cardNumber = cardNumber;
    this.paymentInfo.cvv = cvv;
    this.paymentInfo.expirationDate = expirationDate;
  }
  getPaymentInfo() {
    return this.paymentInfo;
  }
}

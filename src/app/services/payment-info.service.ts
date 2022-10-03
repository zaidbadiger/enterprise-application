import { Injectable } from '@angular/core';
import { PaymentInfo } from '../data/models/payment-info'

@Injectable({
  providedIn: 'root'
})
export class PaymentInfoService {
  cardHolder: String = '';
  cardNumber: String = '';
  expirationDate: String = '';
  cvv: String = '';
  info: String[] = [this.cardHolder, this.cardNumber, this.expirationDate, this.cvv];

  constructor() { }

  getInfo() {
    return this.cardNumber;
  }
}

import { Injectable } from '@angular/core';
import { PaymentInfo } from '../data/models/payment-info'

@Injectable({
  providedIn: 'root'
})
export class PaymentInfoService {
  cardHolder: string = '';
  cardNumber: string = '';
  expirationDate: string = '';
  cvv: string = '';
  info: string[] = [this.cardHolder, this.cardNumber, this.expirationDate, this.cvv];

  constructor() { }

  getInfo() {
    return this.info;
  }
}

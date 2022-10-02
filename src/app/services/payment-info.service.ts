import { Injectable } from '@angular/core';
import { PaymentInfo } from '../data/models/payment-info'

@Injectable({
  providedIn: 'root'
})
export class PaymentInfoService {
  info: PaymentInfo[] = [];

  constructor() { }

  getInfo() {
    return this.info;
  }
}

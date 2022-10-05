import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentInfoService {

  cardHolder: String = 'NA';

  setPaymentInfo(cardHolder : String){
    this.cardHolder = cardHolder;
  }

  getPaymentInfo() {
    return this.cardHolder;
  }
}

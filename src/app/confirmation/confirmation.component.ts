import { Component, OnInit } from '@angular/core';
import { PaymentInfoService } from '../services/payment-info.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent {
  cardNum!: String;
  constructor(private paymentInfoService: PaymentInfoService) {
    this.getCard();
  }

  ngOnInit(): void {
  }

  getCard() {
    this.cardNum = this.paymentInfoService.getInfo();
  }

}

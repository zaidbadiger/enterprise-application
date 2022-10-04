import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { PaymentInfoService } from '../services/payment-info.service';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {

  paymentInfo = this.paymentInfoService.getPaymentInfo();

  checkoutForm = this.formBuilder.nonNullable.group({
    cardHolder: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  })

  constructor(
    private formBuilder: FormBuilder,
    private paymentInfoService: PaymentInfoService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.setData(this.checkoutForm.value.cardHolder!, this.checkoutForm.value.cardNumber!, this.checkoutForm.value.expirationDate!, this.checkoutForm.value.cvv!);
  }

  setData(cardHolder: string, cardNumber: string, expirationDate: string, cvv: string) {
    this.paymentInfoService.setPaymentInfo(cardHolder, cardNumber, cvv, expirationDate);
  }

}

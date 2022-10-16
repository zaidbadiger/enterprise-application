import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { PaymentInfoService } from '../services/payment-info/payment-info.service';
import { Payment } from '../shared/models/Payment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {

  private payment : Payment = new Payment();

  constructor(
    private formBuilder: FormBuilder,
    private paymentInfoService: PaymentInfoService,
    private router: Router
  ) { }

  paymentForm = this.formBuilder.nonNullable.group({
    cardHolder: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.payment.cardHolder = this.paymentForm.value.cardHolder!;
    this.payment.cardNumber = this.paymentForm.value.cardNumber!;
    this.payment.expirationDate = this.paymentForm.value.expirationDate!;
    this.payment.cvv = this.paymentForm.value.cvv!;
    this.paymentInfoService.setPaymentInfo(this.payment);
    this.router.navigate(['/confirmation']);
  }
}

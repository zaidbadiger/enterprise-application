import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { PaymentInfoService } from '../services/payment-info/payment-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private paymentInfoService: PaymentInfoService,
    private router: Router
  ) { }

  paymentForm = this.formBuilder.nonNullable.group({
    cardHolder: ''
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.paymentInfoService.setPaymentInfo(this.paymentForm.value.cardHolder!);
    this.router.navigate(['/confirmation']);
  }
}

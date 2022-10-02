import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { PaymentInfo } from '../data/models/payment-info';
import { PaymentInfoService } from '../services/payment-info.service';

@Component({
  selector: 'app-payment-info',
  templateUrl: './payment-info.component.html',
  styleUrls: ['./payment-info.component.css']
})
export class PaymentInfoComponent implements OnInit {

  paymentInfo = this.paymentInfoService.getInfo();

  checkoutForm = new FormGroup({
    cardHolder: new FormControl(''),
    cardNumber: new FormControl(''),
    expirationDate: new FormControl(''),
    cvv: new FormControl('')
  })

  constructor(
    private formBuilder: FormBuilder,
    private paymentInfoService: PaymentInfoService
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.checkoutForm.value);
  }

}

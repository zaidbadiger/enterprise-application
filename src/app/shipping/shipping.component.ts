import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ShippingService } from '../services/shipping/shipping.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private shippingservice: ShippingService,
    private router: Router
  ) { }

  shippingForm = this.formBuilder.nonNullable.group({
    address: ''
  })

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.shippingservice.setShippingInfo(this.shippingForm.value.address!);
    this.router.navigate(['/payment-info']);
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { ShippingService } from '../services/shipping/shipping.service';
import { Router } from '@angular/router';
import { Address } from '../shared/models/Address';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
  styleUrls: ['./shipping.component.css']
})
export class ShippingComponent implements OnInit {

  private address : Address = new Address();

  constructor(
    private formBuilder: FormBuilder,
    private shippingservice: ShippingService,
    private router: Router
  ) { }

  shippingForm = this.formBuilder.nonNullable.group({
    address: '1234 Oakland. Ave.',
    firstName: 'Jacob',
    lastName: 'Whitley',
    country: 'United States',
    apartmentNo: 'Apt A20',
    state: 'Ohio',
    city: 'Columbus',
    zipcode: '43201'
  })

  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.address.address = this.shippingForm.value.address!;
    this.address.firstName = this.shippingForm.value.firstName!;
    this.address.lastName = this.shippingForm.value.lastName!;
    this.address.country = this.shippingForm.value.country!;
    this.address.apartmentNo = this.shippingForm.value.apartmentNo!;
    this.address.state = this.shippingForm.value.state!;
    this.address.city = this.shippingForm.value.city!; 
    this.address.zipcode = this.shippingForm.value.zipcode!;
    this.shippingservice.setShippingInfo(this.address);
    this.router.navigate(['/payment-info']);
  }
}

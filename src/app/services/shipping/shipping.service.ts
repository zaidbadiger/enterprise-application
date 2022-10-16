import { Injectable } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { Address } from '../../shared/models/Address';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  private address : Address = new Address();

  setShippingInfo(address : Address){
    this.address.address = address.address;
    this.address.firstName = address.firstName;
    this.address.lastName = address.lastName;
    this.address.country = address.country;
    this.address.apartmentNo = address.apartmentNo;
    this.address.state = address.state;
    this.address.city = address.city;
    this.address.zipcode = address.zipcode;
  }

  getShippingInfo() {
    return this.address;
  }
}

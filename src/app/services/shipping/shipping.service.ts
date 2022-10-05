import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShippingService {

  address: String = 'NA';

  setShippingInfo(address : String){
    this.address = address;
  }

  getShippingInfo() {
    return this.address;
  }
}

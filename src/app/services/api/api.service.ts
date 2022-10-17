import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from 'src/app/shared/models/Address';
import { Payment } from 'src/app/shared/models/Payment';
import { Item } from '../../shared/models/Item';
import { Cart } from '../../shared/models/Cart';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private orderUrl: string;
  constructor(private http: HttpClient) {
    this.orderUrl = "http://localhost:8090/order";
  }

  sendOrder(order: any) {
    return this.http.post(this.orderUrl, order);
  }

}

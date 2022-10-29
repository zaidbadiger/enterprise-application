import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Address } from 'src/app/shared/models/Address';
import { Payment } from 'src/app/shared/models/Payment';
import { Item } from '../../shared/models/Item';
import { Cart } from '../../shared/models/Cart';
import { Order } from '../../shared/models/Order';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private orderUrl: string;
  private catalogUrl: string;
  constructor(private http: HttpClient) {
    this.orderUrl = "http://localhost:8090/order";
    this.catalogUrl = "http://localhost:8080/items";
  }

  sendOrder(order: Order) {
    // const headers = new HttpHeaders().set('Content-Type', 'text/plain; charset=utf-8');
    return this.http.post(this.orderUrl, order);
  }

  updateInventory(itemId: number, quantity: number){
    console.log(`${this.catalogUrl}/${itemId}/${quantity}`)
    const body = {};
    this.http.put<any>(`${this.catalogUrl}/${itemId}/${quantity}`,body).subscribe({
      error: error =>{
        console.error("There was an error", error);
      }
    })
  }

}

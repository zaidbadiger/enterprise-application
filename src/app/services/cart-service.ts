import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cart } from '../data/models/cart';
import { CartItem } from '../data/models/cart-item';
import { LineItem } from '../data/models/line-item';

var itemOne: CartItem = {  id: '1', name: 'Basketball', unitCost: 11.99, quantity: 0, totalCost: 0}
var itemTwo: CartItem = { id: '2', name: 'Football', unitCost: 15.99,  quantity: 0, totalCost: 0}
var itemThree: CartItem = {  id: '3',  name: 'Soccer Ball',  unitCost: 12.99,  quantity: 0, totalCost: 0}
var itemFour: CartItem = { id: '4',  name: 'Baseball',  unitCost: 2.99,  quantity: 3, totalCost: 8.97}
var itemFive: CartItem = { id: '5', name: 'Baseball Bat',  unitCost: 33.99,  quantity: 0, totalCost: 0}
var cart:Cart;
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart!: Cart;
  constructor() {
    cart = {cartItems:[itemOne, itemTwo, itemThree, itemFour, itemFive], totalCartCost:12};
   }

  getCart(): Observable<Cart> {
    return of(cart);
  }

  updateCartCost(){

  }

}

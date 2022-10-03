import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Cart } from '../data/models/cart';
import { CartItem } from '../data/models/cart-item';
import { LineItem } from '../data/models/line-item';
import { CatalogService } from './catalog.service';

var itemOne: CartItem = {  id: '1', name: 'Basketball', unitCost: 11.99, quantity: 0, totalCost: 0}
var itemTwo: CartItem = { id: '2', name: 'Football', unitCost: 15.99,  quantity: 0, totalCost: 0}
var itemThree: CartItem = {  id: '3',  name: 'Soccer Ball',  unitCost: 12.99,  quantity: 0, totalCost: 0}
var itemFour: CartItem = { id: '4',  name: 'Baseball',  unitCost: 2.99,  quantity: 0, totalCost: 0}
var itemFive: CartItem = { id: '5', name: 'Baseball Bat',  unitCost: 33.99,  quantity: 0, totalCost: 0}
var cart:Cart;
@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart!: Cart;
  constructor(private catalogService: CatalogService) {
    cart = {cartItems:[itemOne, itemTwo, itemThree, itemFour, itemFive], totalCartCost:0};
   }

  getCart(): Observable<Cart> {
    this.updateCartCost();
    return of(cart);
  }

  private updateCartCost(){
    cart.totalCartCost = cart.cartItems?.reduce((accumulator, cart_item) => {
      return accumulator + cart_item.totalCost*cart_item.quantity;
    }, 0);
    console.log()
  }

  public updateQuantity(item: LineItem){
    //cart.cartItems?.find(x=>x.id === item.id)
    if (item.name == "Basketball") {
      itemOne.quantity= Number(itemOne.quantity) + Number(this.catalogService?.getItemQuantity(item.id))

    } else if(item.name == "Football") {
      itemTwo.quantity = itemTwo.quantity + this.catalogService?.getItemQuantity(item.id)

    } else if(item.name == "Soccer Ball") {
      itemThree.quantity = itemThree.quantity + this.catalogService?.getItemQuantity(item.id)

    } else if(item.name == "Baseball") {
      itemFour.quantity=itemFour.quantity + this.catalogService?.getItemQuantity(item.id)

    } else if(item.name == "Baseball Bat") {
      itemFive.quantity = itemFive.quantity + this.catalogService?.getItemQuantity(item.id)

    }
    this.updateCartCost(); // BUG: isn't updating the cart
  }
}

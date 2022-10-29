import { Injectable } from '@angular/core';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { Item } from 'src/app/shared/models/Item';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart : Cart = new Cart();

  addToCart(item : Item) : void{
    let cartEntry = this.cart.items.find(entry => entry.item.id === item.id);
    if(cartEntry){
      this.changeQuantity(item.id, cartEntry.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(item));
  }

  removeFromCart(itemId : number) : void{
    this.cart.items = this.cart.items.filter(entry => entry.item.id != itemId);
  }

  changeQuantity(itemId : number, quantity : number){
    let cartItem = this.cart.items.find(entry => entry.item.id === itemId);
    if(!cartItem) return;
    cartItem.quantity = quantity;
  }

  emptyCart(){
    this.cart.items=[];
  }

  getCart() : Cart{
    return this.cart;
  }
}

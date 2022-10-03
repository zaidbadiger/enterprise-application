import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart/cart.service';
import { Cart } from '../shared/models/Cart';
import { CartItem } from '../shared/models/CartItem';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart! : Cart;
  constructor(private cartService : CartService) {
    this.setCart();
  }
  ngOnInit(): void {
  }

  removeFromCart(cartItem : CartItem){
    this.cartService.removeFromCart(cartItem.item.id);
    this.setCart();
  }

  changeQuantity(cartItem : CartItem, quantityInString : string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.item.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }

}

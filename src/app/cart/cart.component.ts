import { Component, OnInit } from '@angular/core';
import { Cart } from '../data/models/cart';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:Cart = {};
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.getCart();
  }

  //get Cart items from cart service and assign to local cart variable
  getCart(): void {
    this.cartService.getCart().subscribe(cart => {
      this.cart = cart
    })
  }

}

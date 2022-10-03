import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart/cart.service';
import { Cart } from './shared/models/Cart';
import { CartItem } from './shared/models/CartItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cart! : Cart;
  constructor(private cartService: CartService) {
    this.setCart();
  }

  ngOnInit(): void {
  }

  setCart(){
    this.cart = this.cartService.getCart();
  }
}

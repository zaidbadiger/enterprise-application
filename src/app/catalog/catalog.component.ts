import { Component, OnInit } from '@angular/core';
import { Cart } from '../data/models/cart';
import { LineItem } from '../data/models/line-item';
import { Item } from '../shared/models/Item';
import { CatalogService } from '../services/item/catalog.service';
import { CartService } from '../services/cart/cart.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {

  items: Item[] = [];
  item!: Item;

  constructor(private catalogService: CatalogService, private cartService: CartService, private route: ActivatedRoute) {
   }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
        this.items = this.catalogService.getAll();
    })
  }

  addToCart(itemTemp: Item){
    //add items to cart and reset quantity to zero
    //add items to cart
    //reset quantities
    this.cartService.addToCart(itemTemp);
  }

  updateItemInCart(item: LineItem){ //this is incomplete
    //this.cartService.updateQuantity(item);
  }

}


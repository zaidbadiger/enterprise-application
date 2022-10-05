import { Component, OnInit } from '@angular/core';
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
    this.cartService.addToCart(itemTemp);
  }


}


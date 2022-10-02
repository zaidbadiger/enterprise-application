import { Component, OnInit } from '@angular/core';
import { Cart } from '../data/models/cart';
import { LineItem } from '../data/models/line-item';
import { CatalogService } from '../services/catalog.service';
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  displayedColumns: string[] = ['id','name','unitcost','quantity'];
  catalog_items:LineItem[] = [];
  cart:Cart = {};

  constructor(private catalogService: CatalogService) {
   }

  ngOnInit(): void {
    this.getCatalog();
    this.cart.cartItems=[];
    this.cart.totalCartCost=0;
  }

  //get Catalog items from catalog service and assign to local catalog_items variable
  getCatalog(): void {
    this.catalogService.getItems().subscribe(catalog_items => {
      this.catalog_items = catalog_items
    })
  }

  addToCart(){
    //add items to cart and reset quantity to zero
    //add items to cart
    //reset quantities
    this.catalog_items.forEach((item) =>{
      this.updateItemInCart(); //this is incomplete
    });

  }

  updateItemInCart(){ //this is incomplete

  }

}


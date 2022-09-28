import { Component, OnInit } from '@angular/core';
import { Cart } from '../data/models/cart';
import { LineItem } from '../data/models/line-item';
import { temp_items } from './temp_catalog_items'; //contains the items for display
@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  constructor() {

   }

  ngOnInit(): void {

  }

}

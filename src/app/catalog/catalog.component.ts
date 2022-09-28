import { Component, OnInit } from '@angular/core';
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

  constructor(private catalogService: CatalogService) {
   }

  ngOnInit(): void {
    this.getCatalog();
  }

  //get Catalog items from catalog service and assign to local catalog_items variable
  getCatalog(): void {
    this.catalogService.getItems().subscribe(catalog_items => {
      this.catalog_items = catalog_items
    })
  }

  addToCart(){
    
  }

}


import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LineItem } from '../data/models/line-item';


var itemOne: LineItem = {  id: '1', name: 'basketball', imageUrl: 'placeHolder', unitCost: 11.99, quantity: 0}
var itemTwo: LineItem = { id: '2', name: 'football', imageUrl: 'placeHolder',  unitCost: 15.99,  quantity: 0}
var itemThree: LineItem = {  id: '3',  name: 'soccer ball',  imageUrl: 'placeHolder',  unitCost: 12.99,  quantity: 0}
var itemFour: LineItem = { id: '4',  name: 'baseball',  imageUrl: 'placeHolder',  unitCost: 2.99,  quantity: 0}
var itemFive: LineItem = { id: '5', name: 'baseball bat',  imageUrl: 'placeHolder',  unitCost: 33.99,  quantity: 0}

const catalog_items:LineItem[] = [itemOne, itemTwo, itemThree, itemFour, itemFive];

@Injectable({
  providedIn: 'root'
})
export class CatalogService {

  constructor() { }

  getItems(): Observable<LineItem[]> {
    return of(catalog_items);
  }

  getItem(id:string): Observable<LineItem|undefined>{
    return of(catalog_items.find(x => x.id == id));
  }
}

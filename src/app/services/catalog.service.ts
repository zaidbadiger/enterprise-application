import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LineItem } from '../data/models/line-item';


var itemOne: LineItem = {  id: '1', name: 'Basketball', imageUrl: 'placeHolder', unitCost: 11.99, quantity: 0}
var itemTwo: LineItem = { id: '2', name: 'Football', imageUrl: 'placeHolder',  unitCost: 15.99,  quantity: 0}
var itemThree: LineItem = {  id: '3',  name: 'Soccer Ball',  imageUrl: 'placeHolder',  unitCost: 12.99,  quantity: 0}
var itemFour: LineItem = { id: '4',  name: 'Baseball',  imageUrl: 'placeHolder',  unitCost: 2.99,  quantity: 0}
var itemFive: LineItem = { id: '5', name: 'Baseball Bat',  imageUrl: 'placeHolder',  unitCost: 33.99,  quantity: 0}

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

  public getItemQuantity(name: String) {
    if (name == "Basketball") {
      return itemOne.quantity;
    } else if(name == "Football") {
      return itemTwo.quantity;
    } else if(name == "Soccer Ball") {
      return itemThree.quantity;
    } else if(name == "Baseball") {
      return itemFour.quantity;
    } else {
      return itemFive.quantity;
    }
  }
}

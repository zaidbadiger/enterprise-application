import { Item } from "./Item";

export class CartItem{
    constructor(item : Item){
      this.item = item;
    }
    quantity : number = 1;
    item : Item;

    get price() : number{
        return this.item.price * this.quantity;
    }
}

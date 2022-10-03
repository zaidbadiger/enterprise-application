import { CartItem } from "./CartItem";

export class Cart{
    items : CartItem[] = [];

    get totalPrice() : number{
        let totalPrice = 0;
        this.items.forEach(item => { totalPrice += item.price; });
        return totalPrice;
    }

    get itemCount() : number{
      let itemCount = 0;
      this.items.forEach(item => { itemCount += item.quantity; });
      return itemCount;
  }
}

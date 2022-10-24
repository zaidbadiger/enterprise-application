import { Address } from "./Address";
import { Payment } from "./Payment";
import { Cart } from "./Cart";
import { Item } from "./Item";
import { CartItem } from './CartItem';
import { Deserializable } from "./Deserializable";

export class Order  {
  id! : number;
  address! : Address;
  payment! : Payment;
  items! : Item[];
}

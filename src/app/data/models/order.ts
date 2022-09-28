import { Cart } from "./cart";
import { LineItem } from "./line-item";
import { PaymentInfo } from "./payment-info";
import { ShippingAddress } from "./shipping-address";

export interface Order {
  id?: string;
  cart?: Cart; //all the items added to order
  subtotal?: string;
  shippingAddress?: ShippingAddress;
  paymentInfo?: PaymentInfo;

}

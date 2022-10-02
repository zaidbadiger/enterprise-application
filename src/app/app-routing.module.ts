import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CartComponent } from './cart/cart.component';
const routes: Routes = [
  {path: 'catalog', component: CatalogComponent},
  {path: 'shipping', component: ShippingComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

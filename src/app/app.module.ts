import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {MaterialModule} from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogComponent } from './catalog/catalog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table'
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import {ShippingComponent} from './shipping/shipping.component';
import { CartComponent } from './cart/cart.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    PaymentInfoComponent,
    ShippingComponent,
    CartComponent,
    ConfirmationComponent
  ],
  imports: [
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'payment-info', component: PaymentInfoComponent},
      {path: 'shipping', component: ShippingComponent},
      {path: 'confirmation', component: ShippingComponent}
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

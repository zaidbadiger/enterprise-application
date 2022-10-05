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
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent,
    PaymentInfoComponent,
    ShippingComponent,
    CartComponent,
    ConfirmationComponent,
    AboutUsComponent,
    ContactUsComponent,
    HomeComponent
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
      {path: 'confirmation', component: ShippingComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'contact-us', component: ContactUsComponent},
      {path: 'catalog', component: CatalogComponent},
      {path: 'home', component: ContactUsComponent}
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

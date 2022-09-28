import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MaterialModule} from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogComponent } from './catalog/catalog.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatTableModule } from '@angular/material/table'
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CatalogComponent
  ],
  imports: [
    MatTableModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgbModule,
    FormsModule ,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

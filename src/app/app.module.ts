import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  RouterModule,
  Routes
} from '@angular/router';

import { AppComponent } from './app.component';
import { ConsignorComponent } from './consignor/consignor.component';
import { ConsigneeComponent } from './consignee/consignee.component';
import { ShipmentTypeComponent } from './shipment-type/shipment-type.component';
import { CartComponent } from './cart/cart.component';
import { SummaryComponent } from './summary/summary.component';
import { NavigationComponent } from './navigation/navigation.component';

const routes: Routes = [
  { path: '', redirectTo: 'type', pathMatch: 'full' },
  { path: 'type', component: ShipmentTypeComponent },
  { path: 'consignor', component: ConsignorComponent },
  { path: 'consignee', component: ConsigneeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'summary', component: SummaryComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ConsignorComponent,
    ConsigneeComponent,
    ShipmentTypeComponent,
    CartComponent,
    SummaryComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

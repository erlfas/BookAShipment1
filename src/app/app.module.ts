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

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { ConsignorComponent } from './consignor/consignor.component';
import { ConsigneeComponent } from './consignee/consignee.component';
import { ShipmentTypeComponent } from './shipment-type/shipment-type.component';
import { CartComponent } from './cart/cart.component';
import { SummaryComponent } from './summary/summary.component';
import { NavigationComponent } from './navigation/navigation.component';

import { NavigationService } from './services/navigation.service';
import { ShipmentService } from './services/shipment.service';
import { ConsignorMapComponent } from './consignor/consignor-map/consignor-map.component';
import { ConsignorFormComponent } from './consignor/consignor-form/consignor-form.component';

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
    NavigationComponent,
    ConsignorMapComponent,
    ConsignorFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBy_ZKysDR5N2JpFOtnEFihi8knB-NU1-g'
    })

  ],
  providers: [ NavigationService, ShipmentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

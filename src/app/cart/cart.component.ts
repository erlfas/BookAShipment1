import { Component, OnInit } from '@angular/core';
import { Shipment } from '../shipment/shipment.model';
import { NavigationService } from '../services/navigation.service';
import { ShipmentService } from '../services/shipment.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  shipments: Shipment[];

  constructor(
    private navigationService: NavigationService,
    private shipmentService: ShipmentService
  ) {
    this.shipments = shipmentService.shipments.slice(0, shipmentService.shipments.length);
  }

  ngOnInit() {
  }

}
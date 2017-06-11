import { Component, OnInit } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';

import { Shipment } from '../shipment/shipment.model';
import { Shipments } from '../shipment/shipments.model';
import { BookShipmentResponse } from '../shipment/bookShipmentResponse.model';
import { NavigationService } from '../services/navigation.service';
import { ShipmentService } from '../services/shipment.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  loading: boolean;
  shipments: Shipment[];

  constructor(
    private navigationService: NavigationService,
    private shipmentService: ShipmentService,
    private http: Http
  ) {
    this.shipments = shipmentService.shipments.slice(0, shipmentService.shipments.length);
  }

  ngOnInit() {
  }

  bookShipment(): void {
    console.log('cart: bookShipment()');
    let hd = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers: hd });

    let jsonContent = JSON.stringify(new Shipments(this.shipments));

    console.log('body to send: ' + jsonContent);

    this.http.post(
      'localhost:8080/book',
      jsonContent,
      options)
      .subscribe((res: Response) => {
        console.log(res.text())
        let bookShipmentResponse: BookShipmentResponse = JSON.parse(res.text());
        console.log('bookShipmentResponse.goToUrl: ' + bookShipmentResponse.goToUrl);
        window.location.href = bookShipmentResponse.goToUrl;
      });

  }

}
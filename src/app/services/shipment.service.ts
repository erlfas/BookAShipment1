import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Shipment } from '../shipment/shipment.model';
import { Consignor } from '../consignor/consignor.model';
import { Consignee } from '../consignee/consignee.model';
import { ShipmentType } from '../shipment-type/shipment-type.model';

const initialShipments: Shipment[] = [];

interface IShipmentsOperation extends Function {
    (shipms: Shipment[]): Shipment[];
}

@Injectable()
export class ShipmentService {

    consignor: BehaviorSubject<Consignor> = new BehaviorSubject<Consignor>(null);
    currentConsignee: BehaviorSubject<Consignee> = new BehaviorSubject<Consignee>(null);
    currentShipmentType: BehaviorSubject<ShipmentType> = new BehaviorSubject<ShipmentType>(null);

    shipments: Shipment[] = [];
    newShipment: Subject<Shipment> = new Subject<Shipment>();

    constructor() {
        this.newShipment.subscribe(x => {
            this.shipments = this.shipments.concat(x);
            console.log('# shipments after concatenation: ' + this.shipments.length);
        });

        this.consignor.subscribe((x: Consignor) => {
            if (x != null) {
                console.log('Observer of consignor: got: ' + x.name);
            }
        });

        this.currentShipmentType.subscribe((x: ShipmentType) => {
            if (x != null) {
                console.log('Observer of currentShipmentType: got: ' + x.type);
            }
        });
    }

}
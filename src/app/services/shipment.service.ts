import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { Shipment } from '../shipment/shipment.model';
import { Consignor } from '../consignor/consignor.model';
import { Consignee } from '../consignee/consignee.model';
import { ShipmentType } from '../shipment-type/shipment-type.model';

interface IShipmentsOperation extends Function {
    (shipms: Shipment[]): Shipment[];
}

@Injectable()
export class ShipmentService {

    consignor: Subject<Consignor> = new BehaviorSubject<Consignor>(null);

    currentConsignee: Subject<Consignee> = new BehaviorSubject<Consignee>(null);

    currentShipmentType: Subject<ShipmentType> = new BehaviorSubject<ShipmentType>(null);

    shipments: Observable<Shipment[]>;
    newShipment: Subject<Shipment> = new Subject<Shipment>();
    createShipment: Subject<Shipment> = new Subject<Shipment>();
    updateShipment: Subject<any> = new Subject<any>();

    constructor() {
        this.shipments = this.updateShipment
            .scan((ss: Shipment[], operation: IShipmentsOperation) => {
                return operation(ss);
            }, [])
            .publishReplay(1)
            .refCount();

        this.createShipment
            .map( function(s: Shipment): IShipmentsOperation {
                return (ss: Shipment[]) => {
                    return ss.concat(s);
                };
            })
            .subscribe(this.updateShipment);

        this.newShipment.subscribe(this.createShipment);
    }

}
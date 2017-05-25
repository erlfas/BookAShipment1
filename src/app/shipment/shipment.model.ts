import { Consignor } from '../consignor/consignor.model';
import { Consignee } from '../consignee/consignee.model';
import { ShipmentType } from '../shipment-type/shipment-type.model';

export class Shipment {
    constructor(
        public consignor: Consignor,
        public consignee: Consignee,
        public shipmentType: ShipmentType) {}
}
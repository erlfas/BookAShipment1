import { 
  Component, 
  OnInit, 
  Input, 
  Output,
  EventEmitter
} from '@angular/core';
import { ShipmentType } from './shipment-type.model';
import { NavigationService } from '../services/navigation.service';
import { ShipmentService } from '../services/shipment.service';

@Component({
  selector: 'shipment-type',
  templateUrl: './shipment-type.component.html',
  styleUrls: ['./shipment-type.component.css']
})
export class ShipmentTypeComponent implements OnInit {

  constructor(
    private navigationService: NavigationService,
    private shipmentService: ShipmentService) { }

  ngOnInit() {}

  packageWasSelected(shipmentTypeStr: string): void {
    let shipmentType: ShipmentType = new ShipmentType(shipmentTypeStr);
    this.shipmentService.currentShipmentType.next(shipmentType);
    this.navigationService.currentPage.next('consignor');
  }

}
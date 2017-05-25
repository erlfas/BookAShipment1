import { 
  Component, 
  OnInit, 
  Input, 
  Output,
  EventEmitter
} from '@angular/core';
import { ShipmentType } from './shipment-type.model';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'shipment-type',
  templateUrl: './shipment-type.component.html',
  styleUrls: ['./shipment-type.component.css']
})
export class ShipmentTypeComponent implements OnInit {

  constructor(private navigationService: NavigationService) { }

  ngOnInit() {}

  packageWasSelected(shipmentType: ShipmentType): void {
    console.log('package type selected: ' + shipmentType);
    this.navigationService.currentPage.next('consignor');
  }

}
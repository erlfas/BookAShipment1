import {
  Component,
  OnInit,
  EventEmitter,
  Output
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { Consignor } from './consignor.model';
import { NavigationService } from '../services/navigation.service';
import { ShipmentService } from '../services/shipment.service';

@Component({
  selector: 'consignor',
  templateUrl: './consignor.component.html',
  styleUrls: ['./consignor.component.css']
})
export class ConsignorComponent implements OnInit {

  latInConsignor: number;
  lngInConsignor: number;

  ngOnInit() {}

  postalCodeWasSet(postalCode: string): void {
    console.log('consignor: postalCodeWasSet: ' + postalCode);
    this.latInConsignor = 62.5509767;
    this.lngInConsignor = 7.6830656;
  }

}

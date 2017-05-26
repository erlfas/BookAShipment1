import { 
  Component, 
  OnInit 
} from '@angular/core';
import { 
  FormBuilder, 
  FormGroup,
  Validators,
  AbstractControl
} from '@angular/forms';
import { Observable } from 'rxjs';
import { Consignee } from './consignee.model';
import { Consignor } from '../consignor/consignor.model';
import { Shipment } from '../shipment/shipment.model';
import { ShipmentType } from '../shipment-type/shipment-type.model';
import { NavigationService } from '../services/navigation.service';
import { ShipmentService } from '../services/shipment.service';

@Component({
  selector: 'consignee',
  templateUrl: './consignee.component.html',
  styleUrls: ['./consignee.component.css']
})
export class ConsigneeComponent implements OnInit {

  consigneeForm: FormGroup;

  name: AbstractControl;
  address: AbstractControl;
  postalcode: AbstractControl;
  city: AbstractControl;
  email: AbstractControl;
  phone: AbstractControl;

  constructor(
    formBuilder: FormBuilder, 
    private navigationService: NavigationService,
    private shipmentService: ShipmentService) {
    
    this.consigneeForm = formBuilder.group({
      'name': ['', Validators.required],
      'address': ['', Validators.required],
      'postalcode': ['', Validators.required],
      'city': ['', Validators.required],
      'email': ['', Validators.required],
      'phone': ['', Validators.required]
    });

    this.name = this.consigneeForm.controls['name'];
    this.address = this.consigneeForm.controls['address'];
    this.postalcode = this.consigneeForm.controls['postalcode'];
    this.city = this.consigneeForm.controls['city'];
    this.email = this.consigneeForm.controls['email'];
    this.phone = this.consigneeForm.controls['phone'];
  }

  ngOnInit() {
  }

  onSubmit(): void {

    console.log('Consignee: onSubmit: start');

    let consignee: Consignee = new Consignee(
      this.name.value, 
      this.address.value, 
      this.postalcode.value, 
      this.city.value, 
      this.email.value, 
      this.phone.value
    );

    this.shipmentService.currentConsignee.next(consignee);

    let shipmentType: ShipmentType = this.shipmentService.currentShipmentType.getValue();
    let consignor: Consignor = this.shipmentService.consignor.getValue();
    let shipment: Shipment = new Shipment(consignor, consignee, shipmentType);

    this.shipmentService.newShipment.next(shipment);

    this.navigationService.currentPage.next('cart');

    console.log('Consignee: onSubmit: end');
  }

}

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
import { Consignor } from './consignor.model';
import { NavigationService } from '../services/navigation.service';
import { ShipmentService } from '../services/shipment.service';

@Component({
  selector: 'consignor',
  templateUrl: './consignor.component.html',
  styleUrls: ['./consignor.component.css']
})
export class ConsignorComponent implements OnInit {

  consignorForm: FormGroup;

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
    
    this.consignorForm = formBuilder.group({
      'name': ['', Validators.required],
      'address': ['', Validators.required],
      'postalcode': ['', Validators.required],
      'city': ['', Validators.required],
      'email': ['', Validators.required],
      'phone': ['', Validators.required]
    });

    this.name = this.consignorForm.controls['name'];
    this.address = this.consignorForm.controls['address'];
    this.postalcode = this.consignorForm.controls['postalcode'];
    this.city = this.consignorForm.controls['city'];
    this.email = this.consignorForm.controls['email'];
    this.phone = this.consignorForm.controls['phone'];
  }

  ngOnInit() {
  }

  onSubmit(value: string): void {
    console.log('name: ' + this.name.value);
    console.log('address: ' + this.address.value);
    console.log('postal code: ' + this.postalcode.value);
    console.log('city: ' + this.city.value);
    console.log('email: ' + this.email.value);
    console.log('phone: ' + this.phone.value);

    let consignor: Consignor = new Consignor(
      this.name.value, 
      this.address.value, 
      this.postalcode.value, 
      this.city.value, 
      this.email.value, 
      this.phone.value
    );

    this.shipmentService.consignor.next(consignor);

    this.navigationService.currentPage.next('consignee');
  }

}

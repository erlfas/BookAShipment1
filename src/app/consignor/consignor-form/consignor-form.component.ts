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
import { Consignor } from '../consignor.model';
import { NavigationService } from '../../services/navigation.service';
import { ShipmentService } from '../../services/shipment.service';

@Component({
  selector: 'consignor-form',
  templateUrl: './consignor-form.component.html',
  styleUrls: ['./consignor-form.component.css']
})
export class ConsignorFormComponent implements OnInit {

  consignorForm: FormGroup;

  name: AbstractControl;
  address: AbstractControl;
  postalcode: AbstractControl;
  city: AbstractControl;
  email: AbstractControl;
  phone: AbstractControl;

  @Output() postalCodeSet: EventEmitter<String>;

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

    this.postalcode.valueChanges.subscribe((value: string) => {
      if (value != null && value.length >= 4) {
        this.postalCodeSet.emit(value);
      }
    });
  }

  ngOnInit() {}

  onSubmit(): void {

    console.log('Consignor: onSubmit');

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

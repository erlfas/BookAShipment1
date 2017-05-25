import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../services/navigation.service';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  subscription: Subscription;
  currentPage: string;

  typeIsActive: boolean;
  consignorIsActive: boolean;
  consigneeIsActive: boolean;
  cartIsActive: boolean;
  summaryIsActive: boolean;

  constructor(private navigationService: NavigationService) {
    this.subscription = this.navigationService.currentPage.subscribe(page => {
      this.currentPage = page;
      if (this.currentPage === 'type') {
        this.typeIsActive = true;
        this.consignorIsActive = false;
        this.consigneeIsActive = false;
        this.cartIsActive = false;
        this.summaryIsActive = false;
      } else if (this.currentPage === 'consignor') {
        this.typeIsActive = false;
        this.consignorIsActive = true;
        this.consigneeIsActive = false;
        this.cartIsActive = false;
        this.summaryIsActive = false;
      } else if (this.currentPage === 'consignee') {
        this.typeIsActive = false;
        this.consignorIsActive = false;
        this.consigneeIsActive = true;
        this.cartIsActive = false;
        this.summaryIsActive = false;
      } else if (this.currentPage === 'cart') {
        this.typeIsActive = false;
        this.consignorIsActive = false;
        this.consigneeIsActive = false;
        this.cartIsActive = true;
        this.summaryIsActive = false;
      } else if (this.currentPage === 'summary') {
        this.typeIsActive = false;
        this.consignorIsActive = false;
        this.consigneeIsActive = false;
        this.cartIsActive = false;
        this.summaryIsActive = true;
      } else {
        
      }
    });
  }

  ngOnInit() {}

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

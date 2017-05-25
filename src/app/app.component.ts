import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavigationService } from './services/navigation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ NavigationService ]
})
export class AppComponent {

  activePage: string;
  
  constructor(private router: Router) {
    this.activePage = "type";
  };
  
}

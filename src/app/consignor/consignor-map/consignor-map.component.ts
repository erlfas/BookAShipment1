import { 
  Component, 
  OnInit, 
  Input 
} from '@angular/core';

@Component({
  selector: 'consignor-map',
  templateUrl: './consignor-map.component.html',
  styleUrls: ['./consignor-map.component.css']
})
export class ConsignorMapComponent implements OnInit {
  
  @Input() lat: number;
  @Input() lng: number;

  constructor() { }

  ngOnInit() { 
    this.lat = 51.678418;
    this.lng = 7.809007;
  }

}

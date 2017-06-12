import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'consignor-map',
  templateUrl: './consignor-map.component.html',
  styleUrls: ['./consignor-map.component.css']
})
export class ConsignorMapComponent implements OnInit {

  title: string = 'My first AGM project';
  lat: number = 51.678418;
  lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}

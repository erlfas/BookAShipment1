import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignorMapComponent } from './consignor-map.component';

describe('ConsignorMapComponent', () => {
  let component: ConsignorMapComponent;
  let fixture: ComponentFixture<ConsignorMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignorMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignorMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

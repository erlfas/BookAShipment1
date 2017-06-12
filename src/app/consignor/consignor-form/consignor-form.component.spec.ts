import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsignorFormComponent } from './consignor-form.component';

describe('ConsignorFormComponent', () => {
  let component: ConsignorFormComponent;
  let fixture: ComponentFixture<ConsignorFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsignorFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsignorFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierAddvehicleComponent } from './carrier-addvehicle.component';

describe('CarrierAddvehicleComponent', () => {
  let component: CarrierAddvehicleComponent;
  let fixture: ComponentFixture<CarrierAddvehicleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierAddvehicleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierAddvehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

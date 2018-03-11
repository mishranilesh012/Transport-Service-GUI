import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrierMyordersComponent } from './carrier-myorders.component';

describe('CarrierMyordersComponent', () => {
  let component: CarrierMyordersComponent;
  let fixture: ComponentFixture<CarrierMyordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrierMyordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrierMyordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

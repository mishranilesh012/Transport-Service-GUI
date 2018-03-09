import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerPlaceordersComponent } from './customer-placeorders.component';

describe('CustomerPlaceordersComponent', () => {
  let component: CustomerPlaceordersComponent;
  let fixture: ComponentFixture<CustomerPlaceordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerPlaceordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerPlaceordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

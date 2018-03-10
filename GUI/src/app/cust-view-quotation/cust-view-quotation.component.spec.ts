import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustViewQuotationComponent } from './cust-view-quotation.component';

describe('CustViewQuotationComponent', () => {
  let component: CustViewQuotationComponent;
  let fixture: ComponentFixture<CustViewQuotationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustViewQuotationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustViewQuotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

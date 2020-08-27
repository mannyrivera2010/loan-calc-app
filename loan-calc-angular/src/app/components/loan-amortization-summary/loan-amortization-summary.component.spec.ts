import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAmortizationSummaryComponent } from './loan-amortization-summary.component';

describe('LoanAmortizationSummaryComponent', () => {
  let component: LoanAmortizationSummaryComponent;
  let fixture: ComponentFixture<LoanAmortizationSummaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAmortizationSummaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAmortizationSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

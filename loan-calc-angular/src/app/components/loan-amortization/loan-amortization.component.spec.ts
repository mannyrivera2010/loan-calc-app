import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanAmortizationComponent } from './loan-amortization.component';

describe('LoanAmortizationComponent', () => {
  let component: LoanAmortizationComponent;
  let fixture: ComponentFixture<LoanAmortizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanAmortizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanAmortizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

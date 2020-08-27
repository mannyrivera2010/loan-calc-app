import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { LoanInformation } from '../../models/loan-information.model';
import { LoanSummary } from '../../models/loan-summary.model';

@Component({
  selector: 'app-loan-amortization-summary',
  templateUrl: './loan-amortization-summary.component.html',
  styleUrls: ['./loan-amortization-summary.component.sass']
})
export class LoanAmortizationSummaryComponent implements OnInit {
  @Input() loanSummaryInput: LoanSummary;

  constructor() { }

  ngOnInit(): void {
  }

}

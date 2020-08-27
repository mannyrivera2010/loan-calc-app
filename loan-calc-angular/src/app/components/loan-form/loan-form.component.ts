import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from '@angular/forms';

import { LoanInformation } from '../../models/loan-information.model';

@Component({
  selector: 'app-loan-form',
  templateUrl: './loan-form.component.html',
  styleUrls: ['./loan-form.component.sass']
})
export class LoanFormComponent implements OnInit {
  @Input() loanInformationInput: LoanInformation;
  @Output() newLoanInformationEvent = new EventEmitter<LoanInformation>();

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');


  constructor(private formBuilder: FormBuilder,) {
  }

  ngOnInit(): void {
    console.log("ngOnInit");
    console.log(this.loanInformationInput);
    console.log("create form");

    this.options = this.formBuilder.group({
      // hideRequired: this.hideRequiredControl,
      // floatLabel: this.floatLabelControl,
      loanAmount: 100000,
      loanTerm: 30,
      loanTermUnit: 'year',
      interestRate: 3.75
    });

  }

  private prepareSave(): LoanInformation {
    return new LoanInformation().deserialize(this.options.value);
  }

  public onSubmit() {
    const loanInformation = this.prepareSave();

    console.log(loanInformation);

    this.newLoanInformationEvent.emit(loanInformation);

   
    // this.options.reset();
    // this.prepareForm();
  }

}

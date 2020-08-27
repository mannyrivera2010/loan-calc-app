import { Component } from '@angular/core';

import { LoanInformation } from './models/loan-information.model';
import { LoanSummary } from './models/loan-summary.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'loan-calc-angular';

  loanInformation = new LoanInformation();
  loanSummary = undefined;

  setLoanInformation(loanInformation: LoanInformation): void{
    console.log("setLoanInformation")
    console.log(loanInformation);
    this.loanInformation = loanInformation;
    this.loanSummary = this.createLoanSummary(loanInformation);
  }


  addMonths(dt, n) {
   return new Date(dt.setMonth(dt.getMonth() + n));      
  }

  // https://gist.github.com/jgornick/323115
  // https://www.vertex42.com/ExcelArticles/amortization-calculation.html
  createLoanSummary(loanInformation: LoanInformation): LoanSummary{
    let P = loanInformation.loanAmount;
    let r = (loanInformation.interestRate / 100) / 12;
    
    let totalPayments = 0;

    if(loanInformation.loanTermUnit === 'year'){
      totalPayments = loanInformation.loanTerm * 12;
    }else{
      totalPayments = loanInformation.loanTerm;
    }

    console.log("r=" +  r);
    console.log("totalPayments=" +  totalPayments);

    let monthlyPayment = this.calculateInterest(loanInformation.loanAmount, r, totalPayments );
    let totalPaymentAmount = monthlyPayment * totalPayments;

    let totalInterestPaid = totalPaymentAmount - P;
    
    let payOffDate = this.addMonths(new Date(), totalPayments);

    return new LoanSummary(monthlyPayment,totalInterestPaid, totalPayments, totalPaymentAmount, payOffDate);
  }

  /**
   * Formula to calculate your monthly payments
   * M= P[r(1+r)^n/((1+r)^n)-1)]
   * 
   * Note: 
   * - r: Lenders provide you an annual rate so you’ll need to divide that figure by 12 (the number of months in a year) to get the monthly rate. 
   *    If your interest rate is 5 percent, your monthly rate would be 0.004167 (0.05/12=0.004167)
   * - n Multiply the number of years in your loan term by 12 (the number of months in a year) to get the number of payments for your loan. 
   * 
   * @param P the principal loan amount
   * @param r monthly interest rate.
   * @param n number of payments over the loan’s lifetime
   * @returns monthly payments
   */
  calculateInterest(P: number, r:number, n:number):number{
    let MtI = (1+r);
    let Mt = r * Math.pow(MtI, n);
    let Mb = Math.pow(1+r, n)-1;

    return P*(Mt/Mb);
  }

}

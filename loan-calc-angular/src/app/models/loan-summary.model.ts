export class LoanSummary {
    public monthlyPayment: number;
    public totalInterestPaid: number;
    public totalPayments: number;
    public totalPaymentAmount: number;
    public payOffDate: Date;

    constructor(monthlyPayment: number, totalInterestPaid: number, 
            totalPayments: number,  totalPaymentAmount: number, payOffDate: Date) {
        this.monthlyPayment = monthlyPayment;
        this.totalInterestPaid = totalInterestPaid;
        this.totalPayments = totalPayments;
        this.totalPaymentAmount = totalPaymentAmount;
        this.payOffDate = payOffDate;
    }
}

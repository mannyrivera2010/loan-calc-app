import { LoanSummary } from './loan-summary.model';

describe('LoanSummary', () => {
  it('should create an instance', () => {
    expect(new LoanSummary(100, 100, 100, 100, new Date())).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { LoanDataServiceService } from './loan-data.service';

describe('LoanDataServiceService', () => {
  let service: LoanDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

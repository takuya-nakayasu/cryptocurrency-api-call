import { TestBed, inject } from '@angular/core/testing';

import { BitbankService } from './bitbank.service';

describe('BitbankService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitbankService]
    });
  });

  it('should be created', inject([BitbankService], (service: BitbankService) => {
    expect(service).toBeTruthy();
  }));
});

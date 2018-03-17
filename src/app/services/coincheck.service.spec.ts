import { TestBed, inject } from '@angular/core/testing';

import { CoincheckService } from './coincheck.service';

describe('CoincheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoincheckService]
    });
  });

  it('should be created', inject([CoincheckService], (service: CoincheckService) => {
    expect(service).toBeTruthy();
  }));
});

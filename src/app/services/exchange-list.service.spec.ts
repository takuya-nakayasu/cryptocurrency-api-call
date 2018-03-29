import { TestBed, inject } from '@angular/core/testing';

import { ExchangeListService } from './exchange-list.service';

describe('ExchangeListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExchangeListService]
    });
  });

  it('should be created', inject([ExchangeListService], (service: ExchangeListService) => {
    expect(service).toBeTruthy();
  }));
});

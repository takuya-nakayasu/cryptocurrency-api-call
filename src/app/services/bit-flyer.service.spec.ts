import { TestBed, inject } from '@angular/core/testing';

import { BitFlyerService } from './bit-flyer.service';

describe('BitFlyerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BitFlyerService]
    });
  });

  it('should be created', inject([BitFlyerService], (service: BitFlyerService) => {
    expect(service).toBeTruthy();
  }));
});

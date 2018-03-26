import { TestBed, inject } from '@angular/core/testing';

import { ZaifService } from './zaif.service';

describe('ZaifService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZaifService]
    });
  });

  it(
    'should be created',
    inject([ZaifService], (service: ZaifService) => {
      expect(service).toBeTruthy();
    })
  );
});

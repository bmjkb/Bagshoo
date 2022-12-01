import { TestBed } from '@angular/core/testing';

import { LgvalidationService } from './lgvalidation.service';

describe('LgvalidationService', () => {
  let service: LgvalidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LgvalidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

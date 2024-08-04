import { TestBed } from '@angular/core/testing';

import { AosInitService } from './aos-init.service';

describe('AosInitService', () => {
  let service: AosInitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AosInitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

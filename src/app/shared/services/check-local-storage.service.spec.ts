import { TestBed } from '@angular/core/testing';

import { CheckLocalStorageService } from './check-local-storage.service';

describe('CheckLocalStorageService', () => {
  let service: CheckLocalStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckLocalStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

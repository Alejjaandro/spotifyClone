import { TestBed } from '@angular/core/testing';

import { SearchServiceService } from './search-service.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SearchServiceService', () => {
  let service: SearchServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(SearchServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

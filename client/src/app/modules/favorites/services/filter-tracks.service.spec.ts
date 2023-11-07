import { TestBed } from '@angular/core/testing';

import { FilterTracksService } from './filter-tracks.service';

describe('FilterTracksService', () => {
  let service: FilterTracksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterTracksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

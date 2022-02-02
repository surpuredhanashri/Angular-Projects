import { TestBed } from '@angular/core/testing';

import { ElecronicsService } from './electronics.service';

describe('ElectronicsService', () => {
  let service: ElecronicsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElecronicsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

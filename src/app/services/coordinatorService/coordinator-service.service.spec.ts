import { TestBed } from '@angular/core/testing';

import { CoordinatorServiceService } from './coordinator-service.service';

describe('CoordinatorServiceService', () => {
  let service: CoordinatorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinatorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

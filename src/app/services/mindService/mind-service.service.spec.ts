import { TestBed } from '@angular/core/testing';

import { MindServiceService } from './mind-service.service';

describe('MindServiceService', () => {
  let service: MindServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MindServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

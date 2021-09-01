import { TestBed } from '@angular/core/testing';

import { VacancieServiceService } from './vacancie-service.service';

describe('VacancieServiceService', () => {
  let service: VacancieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacancieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { NoSessionValidatorGuard } from './no-session-validator.guard';

describe('NoSessionValidatorGuard', () => {
  let guard: NoSessionValidatorGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoSessionValidatorGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});

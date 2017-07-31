import { TestBed, async, inject } from '@angular/core/testing';

import { SeasonIsValidGuard } from './season-is-valid.guard';

describe('SeasonIsValidGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SeasonIsValidGuard]
    });
  });

  it('should ...', inject([SeasonIsValidGuard], (guard: SeasonIsValidGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should ...', inject([SeasonIsValidGuard], (guard: SeasonIsValidGuard) => {
    expect(guard.canActivate(null, null)).toBeTruthy();
  }));
});

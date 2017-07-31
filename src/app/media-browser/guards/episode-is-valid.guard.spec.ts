import { TestBed, async, inject } from '@angular/core/testing';

import { EpisodeIsValidGuard } from './episode-is-valid.guard';

describe('EpisodeIsValidGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EpisodeIsValidGuard]
    });
  });

  it('should ...', inject([EpisodeIsValidGuard], (guard: EpisodeIsValidGuard) => {
    expect(guard).toBeTruthy();
  }));
});

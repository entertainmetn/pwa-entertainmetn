import { TestBed, async, inject } from '@angular/core/testing';

import { MediaIsValidGuard } from './media-is-valid.guard';
import { Router } from '@angular/router';

// Mocks
export class MockRouter {
  public url = '';
  public _routeLink: string;
  public navigateByUrl(url: string): void { }
  public isActive(routerLink: string, expected: boolean): boolean {
    this._routeLink = routerLink;
    return expected;
  }
}

describe('MediaIsValidGuard', () => {
  let mockRouter: MockRouter;
  beforeEach(() => {
    mockRouter = new MockRouter();
    TestBed.configureTestingModule({
      providers: [MediaIsValidGuard,
        { provide: Router, useValue: mockRouter }]
    });
  });

  it('should ...', inject([MediaIsValidGuard], (guard: MediaIsValidGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should ...', inject([MediaIsValidGuard], (guard: MediaIsValidGuard) => {
    expect(guard.canActivate(null, null)).toBeFalsy();
  }));
});

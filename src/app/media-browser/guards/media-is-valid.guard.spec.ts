import { MediaBrowserService } from './../media-browser.service';
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
export class MockMediaBrowserService {
  public setActiveMedia(mtype: string, generic: string, id: number): void { }
}

describe('MediaIsValidGuard', () => {
  let mockMediaBrowserService: MockMediaBrowserService;
  let mockRouter: MockRouter;
  beforeEach(() => {
    mockMediaBrowserService = new MockMediaBrowserService();
    mockRouter = new MockRouter();
    TestBed.configureTestingModule({
      providers: [
        MediaIsValidGuard,
        { provide: MediaBrowserService, useValue: mockMediaBrowserService },
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

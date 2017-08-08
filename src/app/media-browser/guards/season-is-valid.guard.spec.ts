import { MediaBrowserService } from './../media-browser.service';
import { ActivatedRouteSnapshot, Router, UrlSegment } from '@angular/router';
import { TestBed, async, inject } from '@angular/core/testing';

import { SeasonIsValidGuard } from './season-is-valid.guard';

// Mocks
export class MockActivatedRouteSnapshot {
  params: {
    se: string
  };
  url: UrlSegment[];
  queryParams: any;
  fragment: string;
  data: any;
  outlet: string;
  routeConfig: any | null;
  root: any;
  parent: any | null;
  any: ActivatedRouteSnapshot | null;
  children: ActivatedRouteSnapshot[];
  pathFromRoot: ActivatedRouteSnapshot[];
  paramMap: any;
  queryParamMap: any;
  component: any;
  firstChild: any;
  constructor(se: string) {
    this.params = { se: 'se' }
    this.params.se = se;
  }
}
export class MockRouter {
  public navigate(url: string): void { }
}
export class MockMediaBrowserService {
  activeMedia;
  constructor() {
    this.activeMedia = new MockActiveMedia();
  }
  public setSeason(url: string): void { }
}
class MockActiveMedia {
  public getMediaInfo(): string {
    return 'default';
  }
}


describe('SeasonIsValidGuard', () => {
  let mockRouter: MockRouter;
  let mockMediaBrowserService: MockMediaBrowserService;
  let mockActivatedRouteSnapshot: MockActivatedRouteSnapshot;
  beforeEach(() => {
    mockRouter = new MockRouter();
    mockMediaBrowserService = new MockMediaBrowserService();
    mockActivatedRouteSnapshot = new MockActivatedRouteSnapshot('2');
    TestBed.configureTestingModule({
      providers: [
        SeasonIsValidGuard,
        { provide: MediaBrowserService, useValue: mockMediaBrowserService },
        { provide: ActivatedRouteSnapshot, useValue: mockActivatedRouteSnapshot },
        { provide: Router, useValue: mockRouter }
      ]
    });
  });

  it('should ...', inject([SeasonIsValidGuard], (guard: SeasonIsValidGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should ...', inject([SeasonIsValidGuard], (guard: SeasonIsValidGuard) => {
    expect(guard.canActivate(mockActivatedRouteSnapshot, null)).toBeTruthy();
  }));

  it('should ...', inject([SeasonIsValidGuard], (guard: SeasonIsValidGuard) => {
    mockActivatedRouteSnapshot.params.se = 'ffff';
    expect(guard.canActivate(mockActivatedRouteSnapshot, null)).toBeFalsy();
  }));
});

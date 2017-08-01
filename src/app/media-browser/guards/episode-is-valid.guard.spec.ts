import { Router } from '@angular/router';
// import { ActivatedRouteSnapshot } from './episode-is-valid.guard.spec';
import { ActivatedRouteSnapshot, UrlSegment } from '@angular/router';
import { TestBed, async, inject } from '@angular/core/testing';

import { EpisodeIsValidGuard } from './episode-is-valid.guard';

// Mocks
export class MockActivatedRouteSnapshot {
  params: {
    ep: string
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
  constructor(ep: string) {
    this.params = { ep: 'ep' }
    this.params.ep = ep;
  }
}
export class MockRouter {
  public navigate(url: string): void { }
}

describe('EpisodeIsValidGuard', () => {
  let mockRouter: MockRouter;
  let mockActivatedRouteSnapshot: MockActivatedRouteSnapshot;
  beforeEach(() => {
    mockRouter = new MockRouter();
    mockActivatedRouteSnapshot = new MockActivatedRouteSnapshot('2');
    TestBed.configureTestingModule({
      providers: [
        EpisodeIsValidGuard,
        { provide: ActivatedRouteSnapshot, useValue: mockActivatedRouteSnapshot },
        { provide: Router, useValue: mockRouter }
      ]
    });
  });

  it('should ...', inject([EpisodeIsValidGuard], (guard: EpisodeIsValidGuard) => {
    expect(guard).toBeTruthy();
  }));

  it('should ...', inject([EpisodeIsValidGuard], (guard: EpisodeIsValidGuard) => {
    expect(guard.canActivate(mockActivatedRouteSnapshot, null)).toBeTruthy();
  }));

  it('should ...', inject([EpisodeIsValidGuard], (guard: EpisodeIsValidGuard) => {
    mockActivatedRouteSnapshot.params.ep = 'ffff';
    expect(guard.canActivate(mockActivatedRouteSnapshot, null)).toBeFalsy();
  }));
});

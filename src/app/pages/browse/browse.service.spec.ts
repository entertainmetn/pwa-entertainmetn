import { TestBed, inject } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { BrowseService } from './browse.service';

// ADDED MOCK CLASS
export class MockActivatedRoute {
  private subject = new BehaviorSubject(this.testParams);
  params = this.subject.asObservable();

  private _testParams: {};
  get testParams() { return this._testParams; }
  set testParams(params: {}) {
    this._testParams = params;
    this.subject.next(params);
  }
}
export class MockRouter {
  public navigateByUrl(url: string): void { }
}

describe('BrowseService', () => {
  let mockRouter: MockRouter;
  let mockActivatedRoute: MockActivatedRoute;

  beforeEach(() => {
    mockRouter = new MockRouter();
    mockActivatedRoute = new MockActivatedRoute();
    mockActivatedRoute.testParams = { id: 'testID' };
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        BrowseService
        ]
    });
  });

  it('should be created', inject([BrowseService], (service: BrowseService) => {
    expect(service).toBeTruthy();
  }));

  it('should return ID', inject([BrowseService], (service: BrowseService) => {

    mockActivatedRoute.testParams = { id: 'testID' };
    expect(service.getIDfromActiveRoute()).toBe('testID');
  }));

  it('should return defaultID', inject([BrowseService], (service: BrowseService) => {

    mockActivatedRoute.testParams = { id: 'dtestID' };
    expect(service.getIDfromActiveRoute()).toBe('dtestID');
  }));

  it('should not fall on null', inject([BrowseService], (service: BrowseService) => {

    mockActivatedRoute.testParams = { id: null };
    expect(service.getIDfromActiveRoute()).toBe('testID');
  }));

  it('should close gracefully', inject([BrowseService], (service: BrowseService) => {

    service.restRoute();
    expect(service).toBeTruthy();
  }));
});

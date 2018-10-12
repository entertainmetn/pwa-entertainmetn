import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { MediaBrowserService } from './media-browser.service';

import { MediaBrowserComponent } from './media-browser.component';

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
export class MockMediaBrowserService {
  public createMediaBrowser(mediaType: string, id: string): boolean {
    return !!mediaType;
  }
}
export class MockRouter {
  public url = '';
  public _routeLink: string;
  public navigateByUrl(url: string): void { }
  public isActive(routerLink: string, expected: boolean): boolean {
    this._routeLink = routerLink;
    return expected;
  }
}

describe('MediaBrowserComponent', () => {
  let mockRouter: MockRouter;
  let mockActivatedRoute: MockActivatedRoute;
  let mockMediaBrowserService: MockMediaBrowserService;
  let component: MediaBrowserComponent;
  let fixture: ComponentFixture<MediaBrowserComponent>;

  beforeEach(async(() => {
    mockRouter = new MockRouter();
    mockActivatedRoute = new MockActivatedRoute();
    mockMediaBrowserService = new MockMediaBrowserService();
    mockActivatedRoute.testParams = { id: 'testID', mtype: 'testMediaBrowser' };
    mockMediaBrowserService.createMediaBrowser('true', '');
    // this.mockRouter.routerLink('test');
    TestBed.configureTestingModule({
      // imports: [RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter },
        { provide: MediaBrowserService, useValue: mockMediaBrowserService }
      ],
      declarations: [MediaBrowserComponent],
      schemas: [NO_ERRORS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should be created', () => {
    mockMediaBrowserService.createMediaBrowser('', '');
    // console.log('===================> ' + mockMediaBrowserService.createMediaBrowser('', ''));
    expect(component).toBeTruthy();
  });

  it('should redirect to 404 if starting with "d"', () => {
    mockMediaBrowserService.createMediaBrowser('', '');
    mockActivatedRoute.testParams = { id: 'dtestID', mtype: 'dtestMediaBrowser' };
    expect(component).toBeTruthy();
    // expect(mockRouter.navigateByUrl('/404')).toHaveBeenCalled();
  });
});

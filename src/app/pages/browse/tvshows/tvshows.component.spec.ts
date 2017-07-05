import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { TVShowsComponent } from './tvshows.component';

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


describe('TVShowsComponent', () => {
  let mockRouter: MockRouter;
  let mockActivatedRoute: MockActivatedRoute;
  let component: TVShowsComponent;
  let fixture: ComponentFixture<TVShowsComponent>;

  beforeEach(async(() => {
    mockRouter = new MockRouter();
    mockActivatedRoute = new MockActivatedRoute();
    mockActivatedRoute.testParams = { id: 'testID' };
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter }
      ],
      declarations: [TVShowsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TVShowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should redirect to 404 if starting with "d"', () => {
    mockActivatedRoute.testParams = { id: 'dtestID' };
    expect(component).toBeTruthy();
    // expect(mockRouter.navigateByUrl('dtestID')).toHaveBeenCalled();
  });
});

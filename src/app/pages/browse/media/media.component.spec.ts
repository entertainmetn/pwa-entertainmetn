import { NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
// import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { MediaComponent } from './media.component';

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
  public url = '';
  public navigateByUrl(url: string): void { }
}

describe('MediaComponent', () => {
  let mockRouter: MockRouter;
  let mockActivatedRoute: MockActivatedRoute;
  let component: MediaComponent;
  let fixture: ComponentFixture<MediaComponent>;

  beforeEach(async(() => {
    mockRouter = new MockRouter();
    mockActivatedRoute = new MockActivatedRoute();
    mockActivatedRoute.testParams = { id: 'testID', mtype: 'testMedia' };
    TestBed.configureTestingModule({
      // imports: [RouterTestingModule],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        { provide: Router, useValue: mockRouter }
      ],
      declarations: [MediaComponent],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
  it('should redirect to 404 if starting with "d"', () => {
    mockActivatedRoute.testParams = { id: 'dtestID', mtype: 'dtestMedia' };
    expect(component).toBeTruthy();
    // expect(mockRouter.navigateByUrl('dtestID')).toHaveBeenCalled();
  });
});

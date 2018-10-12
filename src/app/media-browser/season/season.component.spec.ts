import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonComponent } from './season.component';
// import { MediaService } from '../media.service';

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
/*
export class MockMediaService {
  public activeMedia: {mediaInfo: 'dddd'};
  public getSeason(se: string): boolean {
    return false;
    // this.activeMedia.mediaInfo += 'fff';
  }
}
 */
describe('SeasonComponent', () => {
  let mockActivatedRoute: MockActivatedRoute;
  let component: SeasonComponent;
  let fixture: ComponentFixture<SeasonComponent>;

  beforeEach(async(() => {
    mockActivatedRoute = new MockActivatedRoute();
    mockActivatedRoute.testParams = { se: '1' };
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
      ],
      declarations: [SeasonComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    mockActivatedRoute.testParams = { se: '1' };
    fixture = TestBed.createComponent(SeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    mockActivatedRoute.testParams = { se: '2' };
    expect(component).toBeTruthy();
  });
});

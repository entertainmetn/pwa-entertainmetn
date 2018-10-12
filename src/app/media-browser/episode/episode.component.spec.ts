import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpisodeComponent } from './episode.component';
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
describe('EpisodeComponent', () => {
  let mockActivatedRoute: MockActivatedRoute;
  /* let mockMediaService: MockMediaService; */
  let component: EpisodeComponent;
  let fixture: ComponentFixture<EpisodeComponent>;

  beforeEach(async(() => {
    mockActivatedRoute = new MockActivatedRoute();
    // mockMediaService = new MockMediaService();
    mockActivatedRoute.testParams = { ep: '1' };
    TestBed.configureTestingModule({
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute },
        // { provide: MediaService, useValue: mockMediaService }
      ],
      declarations: [EpisodeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    mockActivatedRoute.testParams = { ep: '1' };
    fixture = TestBed.createComponent(EpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    mockActivatedRoute.testParams = { ep: '2' };
    expect(component).toBeTruthy();
  });

  it('should be created', () => {
    mockActivatedRoute.testParams = { ep: null };
    expect(component).toBeTruthy();
  });
});

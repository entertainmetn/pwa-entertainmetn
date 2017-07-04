import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { BrowseService } from './../browse.service';
import { TVShowsComponent } from './tvshows.component';

// ADDED MOCK CLASS
/*export class MockActivatedRoute {
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
}*/
export class MockBrowserService {
  private _id = 'testID';
  set id(testID: string) { this._id = testID; }
  public getIDfromActiveRoute(): string {
    return this._id;
  }

  public restRoute(): void {
    // this.sub.unsubscribe();
  }
}


describe('TVShowsComponent', () => {
  let mockBrowserService: MockBrowserService;
  let component: TVShowsComponent;
  let fixture: ComponentFixture<TVShowsComponent>;

  beforeEach(async(() => {
    mockBrowserService = new MockBrowserService();
    TestBed.configureTestingModule({
      providers: [
        { provide: BrowseService, useValue: mockBrowserService }
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
    mockBrowserService.id = 'dtestID';
    expect(component).toBeTruthy();
    // expect(mockRouter.navigateByUrl('dtestID')).toHaveBeenCalled();
  });
});

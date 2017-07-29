import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverViewComponent } from './over-view.component';
import { MediaService } from "../media.service";

// ADDED MOCK CLASS
export class MockMediaService {
  public activeMedia= [ {mediaInfo: 'mocked value'} ];
}

describe('OverViewComponent', () => {
  let mockMediaService: MockMediaService;
  let component: OverViewComponent;
  let fixture: ComponentFixture<OverViewComponent>;

  beforeEach(async(() => {
    mockMediaService = new MockMediaService();
    TestBed.configureTestingModule({
      providers: [
        { provide: MediaService, useValue: mockMediaService }],
      declarations: [ OverViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

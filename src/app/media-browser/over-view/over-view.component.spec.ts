import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverViewComponent } from './over-view.component';


describe('OverViewComponent', () => {
  let component: OverViewComponent;
  let fixture: ComponentFixture<OverViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        // { provide: MediaService, useValue: mockMediaService }
      ],
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

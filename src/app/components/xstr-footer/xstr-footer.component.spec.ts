import { TestBed } from '@angular/core/testing';

import { XstrFooterComponent } from './xstr-footer.component';

describe('XstrFooterComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        XstrFooterComponent
      ],
    }).compileComponents();
  });

  it('should create the XstrFooterComponent', () => {
    const fixture = TestBed.createComponent(XstrFooterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});

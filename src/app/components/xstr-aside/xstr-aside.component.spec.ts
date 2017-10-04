import { TestBed } from '@angular/core/testing';

import { XstrAsideComponent } from './xstr-aside.component';

describe('XstrAsideComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        XstrAsideComponent
      ],
    }).compileComponents();
  });

  it('should create the XstrAsideComponent', () => {
    const fixture = TestBed.createComponent(XstrAsideComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});

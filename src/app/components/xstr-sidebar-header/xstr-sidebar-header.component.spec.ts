import { TestBed } from '@angular/core/testing';

import { XstrSidebarHeaderComponent } from './xstr-sidebar-header.component';

describe('XstrSidebarHeaderComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        XstrSidebarHeaderComponent
      ],
    }).compileComponents();
  });

  it('should create the XstrSidebarHeaderComponent', () => {
    const fixture = TestBed.createComponent(XstrSidebarHeaderComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});

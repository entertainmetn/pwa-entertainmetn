import { TestBed } from '@angular/core/testing';

import { XstrSidebarFormComponent } from './xstr-sidebar-form.component';

describe('XstrSidebarFormComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        XstrSidebarFormComponent
      ],
    }).compileComponents();
  });

  it('should create the XstrSidebarFormComponent', () => {
    const fixture = TestBed.createComponent(XstrSidebarFormComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});

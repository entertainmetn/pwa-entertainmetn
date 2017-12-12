import { TestBed } from '@angular/core/testing';

import { XstrSidebarFooterComponent } from './xstr-sidebar-footer.component';

describe('XstrSidebarFooterComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        XstrSidebarFooterComponent,
      ],
    }).compileComponents();
  });

  it('should create the XstrSidebarFooterComponent', () => {
    const fixture = TestBed.createComponent(XstrSidebarFooterComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});

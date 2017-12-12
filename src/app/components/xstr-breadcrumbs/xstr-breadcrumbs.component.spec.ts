import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { XstrBreadcrumbsComponent } from './xstr-breadcrumbs.component';

describe('XstrBreadcrumbsComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
      ],
      declarations: [
        XstrBreadcrumbsComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  it('should create the XstrBreadcrumbsComponent', () => {
    const fixture = TestBed.createComponent(XstrBreadcrumbsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});

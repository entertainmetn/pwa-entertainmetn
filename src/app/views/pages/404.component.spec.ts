import { NO_ERRORS_SCHEMA } from '@angular/core';
import { TestBed } from '@angular/core/testing';

import { P404Component } from './404.component';

describe('P500Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        P404Component,
      ],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
  });

  it('should create the P500Component', () => {
    const fixture = TestBed.createComponent(P404Component);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});

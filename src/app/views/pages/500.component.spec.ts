import { TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { P500Component } from './500.component';

describe('P500Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
      ],
      declarations: [
        P500Component
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  it('should create the P500Component', () => {
    const fixture = TestBed.createComponent(P500Component);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});

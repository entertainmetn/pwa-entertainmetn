import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GenericInfo } from './../../api/models/generic-info';
import { GenericInfoControllerService } from './../../api/services/generic-info-controller.service';

import { Observable } from 'rxjs/Observable';
import { StatsComponent } from './stats.component';

// ADDED MOCK CLASS
export class GenericInfoMock implements GenericInfo {

  name = 'a';
  version = 'b';
  description = 'c';
}

// tslint:disable-next-line:max-classes-per-file
export class MockGenericInfoControllerService {
  private genericInfo: GenericInfoMock;
  constructor() {
    this.genericInfo = new GenericInfoMock();
  }

  genericInfoUsingGET(): Observable<GenericInfo> {
    return new BehaviorSubject(this.genericInfo);
  }
}

describe('StatsComponent', () => {
  let component: StatsComponent;
  let fixture: ComponentFixture<StatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatsComponent ],
      providers: [
        {provide: GenericInfoControllerService, useClass: MockGenericInfoControllerService},
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

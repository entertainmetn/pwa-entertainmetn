import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { GenericInfo } from './../../api/models/generic-info';
import { GenericInfoControllerService } from './../../api/services/generic-info-controller.service';

import { Observable } from 'rxjs/Observable';
import { StatsComponent } from './stats.component';

// ADDED MOCK CLASS
export class MockGenericInfoControllerService {
  private genericInfo: GenericInfo;
  constructor() {
    this.genericInfo = new GenericInfo();
    this.genericInfo.name = 'a';
    this.genericInfo.version = 'b';
    this.genericInfo.description = 'c';
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

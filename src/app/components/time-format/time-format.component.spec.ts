import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeFormatComponent } from './time-format.component';

describe('TimeFormatComponent', () => {
  let component: TimeFormatComponent;
  let fixture: ComponentFixture<TimeFormatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeFormatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeFormatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

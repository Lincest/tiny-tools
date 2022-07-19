import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenSlideComponent } from './full-screen-slide.component';

describe('FullScreenSlideComponent', () => {
  let component: FullScreenSlideComponent;
  let fixture: ComponentFixture<FullScreenSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullScreenSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScreenSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

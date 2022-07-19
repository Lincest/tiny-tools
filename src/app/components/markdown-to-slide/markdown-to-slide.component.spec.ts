import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarkdownToSlideComponent } from './markdown-to-slide.component';

describe('MarkdownToSlideComponent', () => {
  let component: MarkdownToSlideComponent;
  let fixture: ComponentFixture<MarkdownToSlideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarkdownToSlideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarkdownToSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

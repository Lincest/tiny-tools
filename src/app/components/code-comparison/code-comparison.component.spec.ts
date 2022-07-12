import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeComparisonComponent } from './code-comparison.component';

describe('CodeComparisonComponent', () => {
  let component: CodeComparisonComponent;
  let fixture: ComponentFixture<CodeComparisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodeComparisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodeComparisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharDiffDialogComponent } from './char-diff-dialog.component';

describe('CharDiffDialogComponent', () => {
  let component: CharDiffDialogComponent;
  let fixture: ComponentFixture<CharDiffDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharDiffDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharDiffDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

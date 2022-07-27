import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlPastebinComponent } from './url-pastebin.component';

describe('UrlPastebinComponent', () => {
  let component: UrlPastebinComponent;
  let fixture: ComponentFixture<UrlPastebinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UrlPastebinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UrlPastebinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

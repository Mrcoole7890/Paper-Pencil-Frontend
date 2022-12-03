import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSummaryDivComponent } from './base-summary-div.component';

describe('BaseSummaryDivComponent', () => {
  let component: BaseSummaryDivComponent;
  let fixture: ComponentFixture<BaseSummaryDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BaseSummaryDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSummaryDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

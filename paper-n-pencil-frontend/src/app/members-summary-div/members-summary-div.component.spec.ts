import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MembersSummaryDivComponent } from './members-summary-div.component';

describe('MembersSummaryDivComponent', () => {
  let component: MembersSummaryDivComponent;
  let fixture: ComponentFixture<MembersSummaryDivComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembersSummaryDivComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MembersSummaryDivComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

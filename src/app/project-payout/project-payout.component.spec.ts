import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectPayoutComponent } from './project-payout.component';

describe('ProjectPayoutComponent', () => {
  let component: ProjectPayoutComponent;
  let fixture: ComponentFixture<ProjectPayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectPayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectPayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

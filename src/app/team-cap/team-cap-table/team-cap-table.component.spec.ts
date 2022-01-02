import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCapTableComponent } from './team-cap-table.component';

describe('TeamCapTableComponent', () => {
  let component: TeamCapTableComponent;
  let fixture: ComponentFixture<TeamCapTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamCapTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

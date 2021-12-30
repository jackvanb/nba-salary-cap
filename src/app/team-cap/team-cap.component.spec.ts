import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCapComponent } from './team-cap.component';

describe('TeamCapComponent', () => {
  let component: TeamCapComponent;
  let fixture: ComponentFixture<TeamCapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamCapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapSpaceComponent } from './cap-space.component';

describe('CapSpaceComponent', () => {
  let component: CapSpaceComponent;
  let fixture: ComponentFixture<CapSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapSpaceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

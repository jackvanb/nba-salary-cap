import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapTableComponent } from './cap-table.component';

describe('CapTableComponent', () => {
  let component: CapTableComponent;
  let fixture: ComponentFixture<CapTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

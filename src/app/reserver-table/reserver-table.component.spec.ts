import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverTableComponent } from './reserver-table.component';

describe('ReserverTableComponent', () => {
  let component: ReserverTableComponent;
  let fixture: ComponentFixture<ReserverTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReserverTableComponent]
    });
    fixture = TestBed.createComponent(ReserverTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

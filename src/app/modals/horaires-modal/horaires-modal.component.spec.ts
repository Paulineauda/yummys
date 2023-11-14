import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorairesModalComponent } from './horaires-modal.component';

describe('HorairesModalComponent', () => {
  let component: HorairesModalComponent;
  let fixture: ComponentFixture<HorairesModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorairesModalComponent]
    });
    fixture = TestBed.createComponent(HorairesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

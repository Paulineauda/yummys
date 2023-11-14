import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PanierModalComponent } from './panier-modal.component';

describe('PanierModalComponent', () => {
  let component: PanierModalComponent;
  let fixture: ComponentFixture<PanierModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PanierModalComponent]
    });
    fixture = TestBed.createComponent(PanierModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeModalComponent } from './commande-modal.component';

describe('CommandeModalComponent', () => {
  let component: CommandeModalComponent;
  let fixture: ComponentFixture<CommandeModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommandeModalComponent]
    });
    fixture = TestBed.createComponent(CommandeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

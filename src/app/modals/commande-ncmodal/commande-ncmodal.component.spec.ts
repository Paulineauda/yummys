import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandeNCModalComponent } from './commande-ncmodal.component';

describe('CommandeNCModalComponent', () => {
  let component: CommandeNCModalComponent;
  let fixture: ComponentFixture<CommandeNCModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommandeNCModalComponent]
    });
    fixture = TestBed.createComponent(CommandeNCModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

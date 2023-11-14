import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectNCModalComponent } from './connect-ncmodal.component';

describe('ConnectNCModalComponent', () => {
  let component: ConnectNCModalComponent;
  let fixture: ComponentFixture<ConnectNCModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConnectNCModalComponent]
    });
    fixture = TestBed.createComponent(ConnectNCModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

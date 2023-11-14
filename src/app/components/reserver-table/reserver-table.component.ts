import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reserver-table',
  templateUrl: './reserver-table.component.html',
  styleUrls: ['./reserver-table.component.scss']
})
export class ReserverTableComponent {

  public reservationForm: FormGroup;
  public showModal: boolean = false;

  public constructor(private fb: FormBuilder, private router: Router) {
    this.reservationForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      heure: ['', Validators.required],
      nombrePersonnes: ['', [Validators.required, Validators.min(1)]]
    });
  }


  public isInvalid(controlName: string) {
    const control = this.reservationForm.get(controlName);
    return control?.invalid && (control?.dirty || control?.touched);
  }


    public makeReservation() {
        if (this.reservationForm.valid) {
            this.showModal = true;
        }
    }

    public closeModal() {
        this.showModal = false;
        this.router.navigate(['/']);
    }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-reserver-table',
  templateUrl: './reserver-table.component.html',
  styleUrls: ['./reserver-table.component.scss']
})
export class ReserverTableComponent {
  public reservationForm: FormGroup;
  public currentReservation: any = null;
  public showModal: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) { // Injectez Router
    this.reservationForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      date: ['', Validators.required],
      heure: ['', Validators.required],
      nombrePersonnes: ['', [Validators.required, Validators.min(1)]]
    });
  }


  /*onSubmit() {
    if (this.reservationForm.valid) {
      console.log('Réservation envoyée', this.reservationForm.value);

      window.alert("Votre réservation est confirmée.");

      this.router.navigate(['/']);
    }
  }*/

  isInvalid(controlName: string) {
    const control = this.reservationForm.get(controlName);
    return control?.invalid && (control?.dirty || control?.touched);
  }


    makeReservation() {
        if (this.reservationForm.valid) {
            this.showModal = true; // Show the modal
        }
    }

    closeModal() {
        this.showModal = false; // Hide the modal
        this.router.navigate(['/']); // Redirect to the home page
    }
}

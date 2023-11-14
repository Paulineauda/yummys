import { Component } from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {

  public isFormSubmitted : boolean = false;

  public inscriptionForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  public isSubmitClicked: boolean = false;
  public isFormValid: boolean = false;

  public constructor(private fb: FormBuilder) {}

  public onSubmit(): void {
    this.isSubmitClicked = true;
    this.isFormValid = this.inscriptionForm.valid;

    if (this.isFormValid) {
      this.isFormSubmitted = true;
    }
  }

  public isFieldInvalid(fieldName: string) {
    const control = this.inscriptionForm.get(fieldName);
    return control?.invalid && (control.dirty || control.touched || this.isSubmitClicked);
  }

  public isEmailInvalid() {
    const emailControl = this.inscriptionForm.get('email');
    return emailControl?.invalid && (emailControl.dirty || emailControl.touched || this.isSubmitClicked);
  }
}

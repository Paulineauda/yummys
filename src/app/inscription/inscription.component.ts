import { Component } from '@angular/core';
import {FormBuilder, Validators, ValidatorFn, AbstractControl, FormGroup} from "@angular/forms";
import { Router } from "@angular/router";

function validateEmailWithAt(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } | null => {
    const email = control.value;
    if (email && email.indexOf('@') === -1) {
      return { noAt: true };
    }
    return null;
  };
}

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent {

  public inscriptionForm : FormGroup;
  protected isFormValid : boolean = false;
  protected isSubmitClicked: boolean = false;

  constructor (private fb: FormBuilder, private router: Router) {
    this.inscriptionForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      age: [''],
      hideEmail: [''],
      email: ['', [Validators.required, validateEmailWithAt()]],
      comments: ['', Validators.required]
    });
  }


  public onSubmit() {
    if (this.inscriptionForm.valid) {
      this.isSubmitClicked = true;
      this.isFormValid = true;
      window.alert('Le formulaire est valide.');
      this.router.navigateByUrl('/');
    }
  }
}

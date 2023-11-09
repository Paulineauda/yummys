import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "./auth.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Avis} from "../avis";
import {Users} from "../users";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {
  signUpForm: FormGroup;

  public isConnected : boolean = false;
  constructor(private fb: FormBuilder, private authService: AuthService) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }




  onSubmit() {
    if (this.signUpForm.valid) {
      const email = this.signUpForm.value.email;
      const password = this.signUpForm.value.password;
      this.authService.signUp(email, password);
      // Peut-être rediriger l'utilisateur vers une autre page après l'inscription
    }
  }

}

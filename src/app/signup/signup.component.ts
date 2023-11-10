import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ConnectService} from "../services/connect.service";
import {Observable} from "rxjs";
import {Users} from "../users";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  public users: Observable<Users[]> = this.http.get<Users[]>('/api/users');
  public signUpForm: FormGroup;

  constructor(private fb: FormBuilder, public connectService: ConnectService, private http: HttpClient) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() : boolean {
    if (this.signUpForm.valid) {
      const email = this.signUpForm.value.email;
      const password = this.signUpForm.value.password;
      if(this.connectService.identification(email, password)){
        return true;
      }
    }
    return false;
  }

}

import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Avis} from "../accueil/avis";
import {Users} from "../users";
import {ConnectService} from "../services/connect.service";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html'
})
export class SignupComponent {

  public signUpForm: FormGroup;

  protected connectModalIsVisible : boolean = false;

  private users: Observable<Users[]> = this.http.get<Users[]>('/api/users');
  public isConnected : boolean = false;
  showConnectModal():void{
    this.connectModalIsVisible = true;
  }

  hideConnectModal():void{
    this.connectModalIsVisible = false;
  }

  constructor(private fb: FormBuilder, private http: HttpClient, public connectService: ConnectService) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  onSubmit() : void {
    if (this.signUpForm.valid) {
      const email = this.signUpForm.value.email;
      const password = this.signUpForm.value.password;
      this.users.subscribe((usersArray: Users[]) => {
        for (let user  of usersArray) {
          if (email === user.email && password === user.password) {
            this.isConnected = true;
            this.connectService.isConnected = true;
            break;
          }
          this.isConnected = false;
          this.connectService.isConnected = false;
        }
      });
    }
  }
}

import {Component} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Users} from "../Models/users";
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
  public showConnectModal():void{
    this.connectModalIsVisible = true;
  }

  public closeConnectModal(bol : boolean):void{
    this.connectModalIsVisible = bol;
  }

  public constructor(private fb: FormBuilder, private http: HttpClient, public connectService: ConnectService) {
    this.signUpForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  public onSubmit() : void {
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

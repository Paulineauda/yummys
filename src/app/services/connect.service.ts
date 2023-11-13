import { Injectable } from '@angular/core';
import {Users} from "../users";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class ConnectService{

  constructor(private http: HttpClient) { }

  private users: Observable<Users[]> = this.http.get<Users[]>('/api/users');
  public isConnected : boolean = false;

  identification(email: string, password: string): void {
    this.users.subscribe((usersArray: Users[]) => {
      for (let user  of usersArray) {
        if (email === user.email && password === user.password) {
          this.isConnected = true;
          break;
        }
      }
    });
  }
}

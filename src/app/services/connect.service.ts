import { Injectable } from '@angular/core';
import {Users} from "../users";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ConnectService {

  users: Observable<Users[]> = this.http.get<Users[]>('/api/users');
  isConnected : boolean = false;
  Identification(email: string, password: string): boolean {
    this.users.subscribe((usersArray: Users[]) => {
      for (let user of usersArray) {
        if (email === user.email && password === user.password) {
          this.isConnected = true;
          break;
        }
      }
    });
    return this.isConnected;
  }

  constructor(private http: HttpClient) { }
}

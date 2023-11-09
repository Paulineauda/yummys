import { Injectable } from '@angular/core';
import {Users} from "../users";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Product} from "../product";
import {Avis} from "../avis";

@Injectable({
  providedIn: 'root'
})
export class ConnectService{

  constructor(private http: HttpClient) { }

  users: Observable<Users[]> = this.http.get<Users[]>('/api/users');
  isConnected : boolean = false;

  identification(email: string, password: string): boolean {
    this.users.subscribe((usersArray: Users[]) => {
      for (let user of usersArray) {
        console.log(this.users)
        if (email === user.email && password === user.password) {
          this.isConnected = true;
          break;
        }
      }
    });
    return this.isConnected;
  }
}

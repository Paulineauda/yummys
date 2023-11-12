import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectService{

  constructor() { }

  public isConnected : boolean = false;
}

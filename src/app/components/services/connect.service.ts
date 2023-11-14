import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConnectService{

  public constructor() { }

  public isConnected : boolean = false;
}

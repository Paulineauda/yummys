import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avis } from '../Models/avis';

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  private apiUrl : string = '/api/avis';

  public constructor(private http: HttpClient) { }

  public getAvis(): Observable<Avis[]> {
    return this.http.get<Avis[]>(this.apiUrl);
  }
}

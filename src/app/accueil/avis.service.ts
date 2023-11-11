import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Avis } from './avis'; // adjust the path as necessary

@Injectable({
  providedIn: 'root'
})
export class AvisService {

  private apiUrl = '/api/avis'; // URL to web API

  constructor(private http: HttpClient) { }

  getAvis(): Observable<Avis[]> {
    return this.http.get<Avis[]>(this.apiUrl);
  }
}

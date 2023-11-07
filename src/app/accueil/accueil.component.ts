import { Component } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Avis} from "../avis";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent {

  avis: Observable<Avis[]> = this.http.get<Avis[]>('/api/avis');

  constructor(private http: HttpClient){}
}

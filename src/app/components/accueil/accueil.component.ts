import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AvisService } from '../services/avis.service';
import { Avis } from '../Models/avis';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  public avis$!: Observable<Avis[]>;

  public constructor(private avisService: AvisService) {}

  public ngOnInit() {
    this.avis$ = this.avisService.getAvis();
  }
}


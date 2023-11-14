/*import { Component, OnInit } from '@angular/core';
import { AvisService } from './avis.service'; // adjust the path as necessary
import { Avis } from './avis'; // adjust the path as necessary

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  avis ! : Avis[];

  constructor(private avisService: AvisService) {}

  ngOnInit() {
    this.getAvis();
  }

  getAvis(): void {
    this.avisService.getAvis()
      .subscribe(avis => this.avis = avis);
  }
}*/
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AvisService } from '../../services/avis.service';
import { Avis } from '../../models/avis';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  protected avis$!: Observable<Avis[]>;

  protected constructor(private avisService: AvisService) {}

  public ngOnInit() {
    this.avis$ = this.avisService.getAvis();
  }
}


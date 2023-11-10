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
import { AvisService } from './avis.service'; // Adjust the import path as needed
import { Avis } from './avis'; // Adjust the import path as needed

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {

  avis$!: Observable<Avis[]>; // Notice the '$' convention to denote an Observable

  constructor(private avisService: AvisService) {}

  ngOnInit() {
    this.avis$ = this.avisService.getAvis(); // Do not subscribe here, just assign the Observable
  }
}


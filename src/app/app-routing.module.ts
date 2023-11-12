import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {MenuComponent} from "./menu/menu.component";
import {ReserverTableComponent} from "./reserver-table/reserver-table.component";
import {SignupComponent} from "./signup/signup.component";
import {PanierComponent} from "./panier/panier.component";
import {InscriptionComponent} from "./inscription/inscription.component";

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'reserverTable', component: ReserverTableComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'Panier', component: PanierComponent },
  { path: 'Inscription', component: InscriptionComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./components/accueil/accueil.component";
import {MenuComponent} from "./components/menu/menu.component";
import {ReserverTableComponent} from "./components/reserver-table/reserver-table.component";
import {SignupComponent} from "./components/signup/signup.component";
import {PanierComponent} from "./components/panier/panier.component";
import {InscriptionComponent} from "./components/inscription/inscription.component";

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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AccueilComponent} from "./accueil/accueil.component";
import {MenuComponent} from "./menu/menu.component";
import {ReserverTableComponent} from "./reserver-table/reserver-table.component";

const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'Menu', component: MenuComponent },
  { path: 'reserverTable', component: ReserverTableComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { MenuComponent } from './menu/menu.component';
import { ReserverTableComponent } from './reserver-table/reserver-table.component';
import { createServer } from 'miragejs';
import {HttpClientModule} from "@angular/common/http";
import * as data from '../data.json';

type User = {
  id:number;
  name:string
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    MenuComponent,
    ReserverTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    setupMirageServer(); // Initialize Mirage server here
  }
}

export function setupMirageServer() {
  createServer({
    routes() {
      this.get('api/users', () => {
        return [
          {
            "id" : 1,
            "name" : "machin"
          }
        ];
      });
    },
  });
}

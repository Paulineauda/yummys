import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { MenuComponent } from './components/menu/menu.component';
import { ReserverTableComponent } from './components/reserver-table/reserver-table.component';
import { HttpClientModule } from "@angular/common/http";
import { PanierComponent } from './components/panier/panier.component';
import {ReactiveFormsModule} from "@angular/forms";
import { SignupComponent } from './components/signup/signup.component';
import { InscriptionComponent } from './components/inscription/inscription.component';
import { PanierModalComponent } from './modals/panier-modal/panier-modal.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    MenuComponent,
    ReserverTableComponent,
    PanierComponent,
    SignupComponent,
    InscriptionComponent,
    PanierModalComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}




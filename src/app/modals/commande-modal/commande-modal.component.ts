import { Component } from '@angular/core';

@Component({
  selector: 'app-commande-modal',
  templateUrl: './commande-modal.component.html',
  styleUrls: ['./commande-modal.component.scss']
})
export class CommandeModalComponent {

  protected commandeModalIsVisible :  boolean = false;

  public hideCommandeModal():void{
    this.commandeModalIsVisible = false;
  }
}

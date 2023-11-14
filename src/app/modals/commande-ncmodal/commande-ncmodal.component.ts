import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-commande-ncmodal',
  templateUrl: './commande-ncmodal.component.html',
  styleUrls: ['./commande-ncmodal.component.scss']
})
export class CommandeNCModalComponent {
  @Output() closeEvent = new EventEmitter<boolean>();

  closeModal(value: boolean) {
    this.closeEvent.emit(value);
  }
}

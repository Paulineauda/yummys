import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-commande-modal',
  templateUrl: './commande-modal.component.html',
  styleUrls: ['./commande-modal.component.scss']
})
export class CommandeModalComponent {
  @Output() closeEvent = new EventEmitter<boolean>();

  closeModal(value: boolean) {
    this.closeEvent.emit(value);
  }
}

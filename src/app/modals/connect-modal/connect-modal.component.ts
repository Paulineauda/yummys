import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-connect-modal',
  templateUrl: './connect-modal.component.html',
  styleUrls: ['./connect-modal.component.scss']
})
export class ConnectModalComponent {
  @Output() closeEvent = new EventEmitter<boolean>();

  closeModal(value: boolean) {
    this.closeEvent.emit(value);
  }
}

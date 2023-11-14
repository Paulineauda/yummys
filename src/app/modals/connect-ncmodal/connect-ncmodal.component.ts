import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-connect-ncmodal',
  templateUrl: './connect-ncmodal.component.html',
  styleUrls: ['./connect-ncmodal.component.scss']
})
export class ConnectNCModalComponent {
  @Output() closeEvent = new EventEmitter<boolean>();

  closeModal(value: boolean) {
    this.closeEvent.emit(value);
  }
}

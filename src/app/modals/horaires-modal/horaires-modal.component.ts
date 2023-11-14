import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-horaires-modal',
  templateUrl: './horaires-modal.component.html',
  styleUrls: ['./horaires-modal.component.scss']
})
export class HorairesModalComponent {
  @Output() closeEvent = new EventEmitter<boolean>();

  closeModal(value: boolean) {
    this.closeEvent.emit(value);
  }
}

import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent {
  @Output() closeEvent = new EventEmitter<boolean>();

  closeModal(value: boolean) {
    this.closeEvent.emit(value);
  }
}

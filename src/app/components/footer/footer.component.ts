import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  public showContactModal: boolean = false;
  public showScheduleModal: boolean = false;

  closeScheduleModal(bol: boolean) {
    this.showScheduleModal = bol;
  }

  closeContactModal(bol: boolean) {
    this.showContactModal = bol;
  }
}

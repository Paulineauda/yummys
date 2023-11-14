import { Component } from '@angular/core';

@Component({
  selector: 'app-horaires-modal',
  templateUrl: './horaires-modal.component.html',
  styleUrls: ['./horaires-modal.component.scss']
})
export class HorairesModalComponent {
  public showScheduleModal: boolean = false;
}

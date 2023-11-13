import { Component, Input } from '@angular/core';
import { Plat } from './plat.model';

@Component({
  selector: 'app-plat',
  templateUrl: './plat.component.html',
  styleUrls: ['./plat.component.scss']
})
export class PlatComponent {
  @Input() plat!: Plat;
}

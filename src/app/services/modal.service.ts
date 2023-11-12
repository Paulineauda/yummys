import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor() { }

  showModal(isVisible: boolean): void {
    isVisible = true;
  }


  hideModal(isVisible : boolean) : void{
    isVisible = false;
  }
}

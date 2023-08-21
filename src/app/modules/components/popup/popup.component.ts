import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  isVisible = false;
  @Output() confirmed = new EventEmitter<void>();

  openModal() {
      this.isVisible = true;
  }

  closeModal() {
      this.isVisible = false;
  }

  confirm() {
      this.confirmed.emit();
      this.closeModal();
  }
}

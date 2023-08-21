import { Component, EventEmitter, Input, NgModule, Output, ViewChild } from '@angular/core';
import { faPen, faArrowsAlt, faTrash } from '@fortawesome/free-solid-svg-icons';
import { CardData } from '../../pages/home/home.component';
import { PopupComponent } from '../popup/popup.component';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent {
  @Input() id!: number;
  @Input() type!: number;
  @Input() description!: string;
  @Input() progress!: number;
  @Input() commentsCount!: number;
  @Input() attachmentsCount!: number;
  @Output() editRequested = new EventEmitter<CardData>();
  @Output() cardDeleted = new EventEmitter<number>();
  @ViewChild('popup') popup!: PopupComponent;
  cardIdToDelete: number | null = null;
  faPen = faPen;
  faArrowsAlt = faArrowsAlt;
  faTrash = faTrash;

  get cardType(): string {
    switch (this.type) {
      case 1: return 'Em espera';
      case 2: return 'Em progresso';
      case 3: return 'Entregue';
      default: return 'Unknown';
    }
  }

  requestEdit(event: Event) {
    event.preventDefault();

    const cardDataToEdit: CardData = {
      id: this.id,
      type: this.type,
      description: this.description,
      progress: this.progress,
      commentsCount: this.commentsCount,
      attachmentsCount: this.attachmentsCount
    };

    this.editRequested.emit(cardDataToEdit);
  }

  onDeleteCard(cardId: number): void {
    this.cardIdToDelete = cardId;
    this.popup.openModal();
  }

  actuallyDeleteCard(): void {
      if (this.cardIdToDelete !== null) {
          this.cardDeleted.emit(this.cardIdToDelete);
          this.cardIdToDelete = null;
      }
  }
}
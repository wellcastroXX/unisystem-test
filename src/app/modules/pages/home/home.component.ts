import { Component, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface CardData {
  id: any;
  type: number;
  description: string;
  progress: number;
  commentsCount: number;
  attachmentsCount: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild('editModal') editModal: any;
  cardData$: BehaviorSubject<CardData[]> = new BehaviorSubject<CardData[]>([]);
  selectedCardForEdit: CardData | null = null;
  /* cardsData: CardData[] = [
    {
      id: 0,
      type: 1,
      description: "2 Toneladas de Soja para serem carregadas de Miranda-MS para Cascavel-PR",
      progress: 10,
      commentsCount: 5,
      attachmentsCount: 3
    },
    {
      id: 1,
      type: 2,
      description: "3 Toneladas de Milho para serem carregadas de Campo Mourão-PR para São Gabriel do Oeste-MS",
      progress: 40,
      commentsCount: 2,
      attachmentsCount: 1
    },
    {
      id: 2,
      type: 3,
      description: "1 Tonelada de Algodão para serem carregadas de Curitiba-PR para Bonito-MS",
      progress: 100,
      commentsCount: 2,
      attachmentsCount: 1
    },
  ]; */

  ngOnInit() {
    const initialCards = [
      {
        id: 0,
        type: 1,
        description: "2 Toneladas de Soja para serem carregadas de Miranda-MS para Cascavel-PR",
        progress: 10,
        commentsCount: 5,
        attachmentsCount: 3
      },
      {
        id: 1,
        type: 2,
        description: "3 Toneladas de Milho para serem carregadas de Campo Mourão-PR para São Gabriel do Oeste-MS",
        progress: 40,
        commentsCount: 2,
        attachmentsCount: 1
      },
      {
        id: 2,
        type: 3,
        description: "1 Tonelada de Algodão para serem carregadas de Curitiba-PR para Bonito-MS",
        progress: 100,
        commentsCount: 2,
        attachmentsCount: 1
      },
    ];
    this.cardData$.next(initialCards);
    const storedCardsData = localStorage.getItem('cardsData');
    if (storedCardsData) {
        this.cardData$.next(JSON.parse(storedCardsData));
    }
  }

  addNewCard(newCard: CardData) {
    const currentCards = this.cardData$.getValue();
    this.cardData$.next([...currentCards, newCard]);
  }

  onNewCardSaved(newCardData: CardData) {
    this.addNewCard(newCardData);
    localStorage.setItem('cardsData', JSON.stringify(this.cardData$.getValue()));
  }

  handleEditRequest(cardDataToEdit: CardData) {
    this.selectedCardForEdit = cardDataToEdit;
    this.editModal.openModal();  
  }

  updateCard(updatedCard: CardData) {
    const currentCards = this.cardData$.getValue();
    const cardIndex = currentCards.findIndex(card => card.id === updatedCard.id);
    if (cardIndex > -1) {
        currentCards[cardIndex] = updatedCard;
        this.cardData$.next(currentCards);
    }
  }

  removeCard(cardId: number): void {
    const currentCards = this.cardData$.getValue();
    const updatedCards = currentCards.filter(card => card.id !== cardId);
    this.cardData$.next(updatedCards);
  }
  
}

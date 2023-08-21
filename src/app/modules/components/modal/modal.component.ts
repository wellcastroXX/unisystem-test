import { Component, EventEmitter, Output } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  faClose = faClose;
  isVisible = false;
  isLoading = false;
  selectedOption: string | null = null;
  selectedType: number | null = null;
  taskDescription: string = '';
  @Output() saved = new EventEmitter<any>();

    openModal() {
        this.isVisible = true;
    }

    closeModal() {
      this.isVisible = false;
    }

    onOptionSelected(value: number) {
      this.selectedType = value;
      console.log(this.selectedType);
    }
    
    saveData() {
      this.isLoading = true;
      setTimeout(() => {
        if (this.selectedType && this.taskDescription) {
          var randNumber = Math.random() * 1000;
            const newCard = {
                id: randNumber,
                type: this.selectedType,
                description: this.taskDescription,
                progress: 50,
                commentsCount: 0,
                attachmentsCount: 0, 
            };
            this.saved.emit(newCard);
            this.isLoading = false;
            this.isVisible = false;
            console.log('New card data emitted from modal:', newCard);
        } else {
          console.log('Sem nada para salvar');
          this.isLoading = false;
          this.isVisible = false;
        }
      }, 3000);
  }
  
}

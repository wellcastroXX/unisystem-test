import { ChangeDetectorRef, Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { CardData } from '../../pages/home/home.component';

@Component({
  selector: 'app-modal-edit',
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss']
})
export class ModalEditComponent {

  private _type: number = 0;
  private _description: string = '';
  faClose = faClose;
  isVisible = false;
  isLoading = false;
  selectedOption: string | null = null;
  selectedType: number | null = null;
  taskDescription: string = '';
  @Input() cardData: CardData | null = null;
  @Output() saved = new EventEmitter<any>();
  @Output() cardUpdated = new EventEmitter<CardData>();

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes['cardData']) {
        console.log("Received card data in modal: ", this.cardData);
    }
  }

  get description(): string { return this.cardData ? this.cardData.description : this._description;}
  set description(value: string) {
    if (this.cardData) {
      this.cardData.description = value;
    } else {
      this._description = value;
    }
  }
  get type(): number { return this.cardData ? this.cardData.type : this._type;}
  set type(value: number) {
    if (this.cardData) {
      this.cardData.type = value;
    } else {
      this._type = value;
    }
  }

  openModal() {
      console.log("openModal method called");
        this.isVisible = true;
        this.cdr.detectChanges();
  }

  closeModal() {
      this.isVisible = false;
  }

  onOptionSelected(value: number) {
      this.selectedType = value;
      console.log(this.selectedType);
  }

  updateCard() {
    this.isLoading = true;
    setTimeout(() => {
      if (this.cardData) {
        this.cardData.description = this.description;
        this.cardData.type = this.selectedType || this.type;
        this.cardUpdated.emit(this.cardData);
        this.closeModal();
        this.isLoading = false;
        console.log('Emitting updated card:', this.cardData);
      }
    }, 3000);
  }

}

import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {
  isOpen = false;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;
  selectedOptionText: string = 'Selecione o tipo';
  options = [
    { value: 1, label: 'Em espera' },
    { value: 2, label: 'Em progresso' },
    { value: 3, label: 'Entregue' }
  ];
  @Input() initialValue: number | null = null;
  @Output() optionSelected = new EventEmitter<number>();

  ngOnChanges(changes: SimpleChanges) {
    if (changes['initialValue']) {
      this.updateSelectedOptionText();
    }
  }

  ngOnInit() {
    this.updateSelectedOptionText();
    if (this.initialValue) {
      const selectedOption = this.options.find(option => option.value === this.initialValue);
      if (selectedOption) {
          this.selectedOptionText = selectedOption.label;
      }
    }
  }

  updateSelectedOptionText() {
    if (this.initialValue !== null) {
      const selectedOption = this.options.find(option => option.value === this.initialValue);
      if (selectedOption) {
        this.selectedOptionText = selectedOption.label;
      }
    }
  }

  toggleDropdown() {
    this.isOpen = !this.isOpen;
  }

  selectOption(value: number) {
    const selectedOption = this.options.find(option => option.value === value);
    if (selectedOption) {
        this.selectedOptionText = selectedOption.label;
        this.optionSelected.emit(value);
    }
    this.isOpen = false;
  }

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
    @Input() label!: string;
    @Input() color: string = '#7331D5';
    @Input() borderColor: string = '#7331D5';
    @Input() borderRadius: string = '5px';
    @Input() textColor: string = 'white';
    @Input() isLoading: boolean = false;
    @Input() isBold: boolean = false;
    @Input() icon: string = '';

    get borderStyle(): string {
      return `1px solid ${this.borderColor}`;
    }
  }

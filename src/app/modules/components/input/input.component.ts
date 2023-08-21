import { Component, Input } from '@angular/core';
import { AbstractControl, FormControl, Validators } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent {
    @Input() label: string = '';
    @Input() type: string = 'text';
    @Input() control!: FormControl;
    isPasswordVisible = false; 
    inputControl = new FormControl('', []);
    faEye = faEye;
    faEyeSlash = faEyeSlash;

    ngOnInit() {
      if (this.type === 'email') {
        this.inputControl.setValidators([Validators.required, Validators.email]);
      } else if (this.type === 'password') {
        this.inputControl.setValidators([Validators.required]);
      }
      this.inputControl.updateValueAndValidity();
    }

    togglePasswordVisibility() {
      this.isPasswordVisible = !this.isPasswordVisible;
    }
  }
  

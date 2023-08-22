import { Component, Input, forwardRef } from '@angular/core';
import { AbstractControl, FormControl, NG_VALUE_ACCESSOR, Validators } from '@angular/forms';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true
    }
  ]
})
export class InputComponent {
    @Input() label: string = '';
    @Input() type: string = 'text';
    value: string = '';
    isPasswordVisible = false; 
    inputControl = new FormControl('');
    faEye = faEye;
    faEyeSlash = faEyeSlash;

    onChange: any = () => {};
    onTouched: any = () => {};

    writeValue(val: string): void {
      this.value = val;
    }

    registerOnChange(fn: any): void {
      this.onChange = fn;
    }

    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }

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
  

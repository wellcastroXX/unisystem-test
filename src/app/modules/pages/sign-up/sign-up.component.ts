import { ChangeDetectorRef, Component, ElementRef, NgModule, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})

export class SignUpComponent {
  isLoading = false;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
    confirmpassword: ['', [Validators.required]],
  });
  
  constructor(private fb: FormBuilder, private router: Router, private cdRef: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.cdRef.detectChanges();
  }
  
  onRegister() {
    if (this.loginForm.valid) {
      this.isLoading = true;
      setTimeout(() => {
          this.isLoading = false;
          this.router.navigate(['/home']);
      }, 2000);
    } else {
      this.loginForm.markAllAsTouched();
    }
  }
  
}

import { Component, NgModule } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
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
  });
  
  constructor(private fb: FormBuilder, private router: Router) {}

  onRegister() {
    this.isLoading = true;
    console.log('validated');
    setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/home']);
    }, 2000);
  }
}

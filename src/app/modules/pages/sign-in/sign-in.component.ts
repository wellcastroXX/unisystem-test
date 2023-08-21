import { Component, Input, NgModule } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})

export class SignInComponent {

  isLoading = false;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]],
  });
  
  constructor(private fb: FormBuilder, private router: Router) {}

  onLogin() {
    this.isLoading = true;
    console.log('validated');
    setTimeout(() => {
        this.isLoading = false;
        this.router.navigate(['/home']);
    }, 2000);
  }

}

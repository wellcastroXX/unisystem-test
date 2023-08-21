import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './modules/pages/sign-in/sign-in.component';
import { SignUpComponent } from './modules/pages/sign-up/sign-up.component';
import { HomeComponent } from './modules/pages/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'signIn', pathMatch: 'full' },
  { path: 'signIn', component: SignInComponent },
  { path: 'signUp', component: SignUpComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

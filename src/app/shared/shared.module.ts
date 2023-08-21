import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidemenuComponent } from '../modules/components/sidemenu/sidemenu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from '../modules/components/header/header.component';
import { CardsComponent } from '../modules/components/cards/cards.component';
import { ModalComponent } from '../modules/components/modal/modal.component';
import { DropdownComponent } from '../modules/components/dropdown/dropdown.component';
import { ButtonComponent } from '../modules/components/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalEditComponent } from '../modules/components/modal-edit/modal-edit.component';
import { InputComponent } from '../modules/components/input/input.component';
import { SignUpComponent } from '../modules/pages/sign-up/sign-up.component';
import { SignInComponent } from '../modules/pages/sign-in/sign-in.component';
import { PopupComponent } from '../modules/components/popup/popup.component';

@NgModule({
  declarations: [
    InputComponent,
    SidemenuComponent,
    HeaderComponent,
    CardsComponent,
    ButtonComponent,
    ModalComponent,
    DropdownComponent,
    ModalEditComponent,
    SignInComponent,
    SignUpComponent,
    PopupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    FontAwesomeModule,
    ReactiveFormsModule,
  ],
  exports: [
    InputComponent,
    SidemenuComponent,
    HeaderComponent,
    CardsComponent,
    ButtonComponent,
    ModalComponent,
    DropdownComponent,
    ModalEditComponent,
    PopupComponent
  ]
})
export class SharedModule { }

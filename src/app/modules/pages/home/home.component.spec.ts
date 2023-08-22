import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { SidemenuComponent } from '../../components/sidemenu/sidemenu.component';
import { HeaderComponent } from '../../components/header/header.component';
import { ModalComponent } from '../../components/modal/modal.component';
import { ModalEditComponent } from '../../components/modal-edit/modal-edit.component';
import { ButtonComponent } from '../../components/button/button.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownComponent } from '../../components/dropdown/dropdown.component';
import { CardsComponent } from '../../components/cards/cards.component';
import { PopupComponent } from '../../components/popup/popup.component';
import { FormsModule } from '@angular/forms';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        SidemenuComponent,
        HeaderComponent,
        ModalComponent,
        ModalEditComponent,
        ButtonComponent,
        DropdownComponent,
        CardsComponent,
        PopupComponent
      ],
      imports: [
        FontAwesomeModule,
        FormsModule
      ]
    });
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

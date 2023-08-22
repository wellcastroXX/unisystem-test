import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModalEditComponent } from './modal-edit.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { ButtonComponent } from '../button/button.component';
import { FormsModule } from '@angular/forms';

describe('ModalEditComponent', () => {
  let component: ModalEditComponent;
  let fixture: ComponentFixture<ModalEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ModalEditComponent, 
        DropdownComponent, 
        ButtonComponent
      ],
      imports: [ 
        FontAwesomeModule,
        FormsModule
      ]
    });
    fixture = TestBed.createComponent(ModalEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

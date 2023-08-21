import { Component } from '@angular/core';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  UserLogged = 'Elon Musk';
  dropdownVisible = false;
  faChevronDown = faChevronDown;
  faChevronUp = faChevronUp;

  toggleDropdown() {
    this.dropdownVisible = !this.dropdownVisible;
  }
  toggleSideMenu() {
    
  }

}

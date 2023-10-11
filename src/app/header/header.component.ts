import { Component, ElementRef } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;


  constructor(private elementRef: ElementRef) {}

  toggleMenu() {
    const menu = this.elementRef.nativeElement.querySelector('#buger-menu');
    const menu2 = this.elementRef.nativeElement.querySelector('#nav-mobile');
    if (menu) {
      menu.classList.toggle('openmenu');
      menu2.classList.toggle('show-mobile-menu');
      this.isMenuOpen = !this.isMenuOpen;
    }
  }

}
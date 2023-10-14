import { Component, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuOpen = false;
  isNavUnderlined = false;


  constructor(private elementRef: ElementRef, private router: Router) {}

  toggleMenu() {
    const menu = this.elementRef.nativeElement.querySelector('#buger-menu');
    const menu2 = this.elementRef.nativeElement.querySelector('#nav-mobile');
    if (menu) {
      menu.classList.toggle('openmenu');
      menu2.classList.toggle('show-mobile-menu');
      this.isMenuOpen = !this.isMenuOpen;
    }
  }

  selectedElementId: string = ''; // Füge eine Variable hinzu, um das ausgewählte Element zu speichern

  underlineNav(id: string) {
    const clickedElement = this.elementRef.nativeElement.querySelector(`#${id}`);
  
    // Entferne die Klasse von allen Elementen
    const allElements = this.elementRef.nativeElement.querySelectorAll('a');
    allElements.forEach((element: HTMLElement) => {
      element.classList.remove('purple-underline');
    });
  
    // Füge die Klasse nur dem geklickten Element hinzu
    if (clickedElement) {
      clickedElement.classList.add('purple-underline');
      this.selectedElementId = id; // Aktualisiere das ausgewählte Element
    }
  }
}
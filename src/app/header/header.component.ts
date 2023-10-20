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

  selectedElementId: string = ''; // Fügt eine Variable hinzu, um das ausgewählte Element zu speichern

  underlineNav(event: Event, id: string) {
    let clickedElement = this.elementRef.nativeElement.querySelector(`#${id}`);
    
    // Entfernt die Klasse von allen Elementen
    let allElements = this.elementRef.nativeElement.querySelectorAll('a');
    allElements.forEach((element: HTMLElement) => {
      element.classList.remove('purple-underline');
    });
    
    // Fügt die Klasse nur dem geklickten Element hinzu
    if (clickedElement) {
      clickedElement.classList.add('purple-underline');
      this.selectedElementId = id; // ausgewähltes Element wird aktualisiert
      location.href=(`#${this.selectedElementId}`);
    } else {
      this.selectedElementId = ''; // wenn kein passendes Elemt gefunden wird, wird die Varaiabel zurückgesetzt
    }
  
    // Die folgende Zeile erlaubt die Standardaktion (Ankernavigation) fortzuführen
    event.preventDefault();
  }
}
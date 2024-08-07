import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() showEnglishVersion!: boolean;
  @Input() showGermanVersion!: boolean;
  @Output() languageToggled = new EventEmitter<boolean>();

  isMenuOpen = false;
  isNavUnderlined = false;

  constructor(private elementRef: ElementRef, private router: Router) {}

  toggleLanguage(language: string) {
    if (language === 'german') {
      this.showEnglishVersion = false;
      this.showGermanVersion = true;
    } else if (language === 'english') {
      this.showEnglishVersion = true;
      this.showGermanVersion = false;
    }
    this.languageToggled.emit(this.showEnglishVersion);
  }

  toggleMenu() {
    let menu = this.elementRef.nativeElement.querySelector('#buger-menu');
    let menu2 = this.elementRef.nativeElement.querySelector('#nav-mobile');
    if (menu) {
      menu.classList.toggle('openmenu');
      menu2.classList.toggle('show-mobile-menu');
      this.isMenuOpen = !this.isMenuOpen;
    }
  }

  underlineNav(event: Event) {
    let clickedElement = event.target as HTMLAnchorElement;

    let allElements = this.elementRef.nativeElement.querySelectorAll('a');
    allElements.forEach((element: HTMLElement) => {
      element.classList.remove('purple-underline');
    });
    clickedElement.classList.add('purple-underline');
    clickedElement.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }

  closeMenuAndScroll(anchor: string) {
    let targetElement = document.querySelector(anchor);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
    setTimeout(() => {
      this.toggleMenu();
    }, 750);
  }
}

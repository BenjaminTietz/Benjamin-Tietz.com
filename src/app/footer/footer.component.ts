import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {


  constructor(private elementRef: ElementRef) {}

  openImprint() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
}

  openPrivacyPolicy() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });
  }

}

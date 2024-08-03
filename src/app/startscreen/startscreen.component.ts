import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-startscreen',
  templateUrl: './startscreen.component.html',
  styleUrls: ['./startscreen.component.scss'],
})
export class StartscreenComponent {
  @Input() showEnglishVersion!: boolean;
  @Input() showGermanVersion!: boolean;
  constructor(private router: Router) {}

  navigateToContact() {
    this.router.navigate(['/your-route#contact-me']);
  }
}

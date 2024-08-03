import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss'],
})
export class ImprintComponent {
  @Input() showEnglishVersion!: boolean;
  @Input() showGermanVersion!: boolean;
}

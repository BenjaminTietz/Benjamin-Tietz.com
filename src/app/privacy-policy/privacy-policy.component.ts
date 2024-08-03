import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.scss'],
})
export class PrivacyPolicyComponent {
  @Input() showEnglishVersion!: boolean;
  @Input() showGermanVersion!: boolean;
}

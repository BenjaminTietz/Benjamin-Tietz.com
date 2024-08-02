import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'benjamin-tietz.com';

  constructor(private route: ActivatedRoute, private router: Router) {}

  showHeader: boolean = true;
  showStartscreen: boolean = true;
  showAbout: boolean = true;
  showSkills: boolean = true;
  showPortfolio: boolean = true;
  showContactMe: boolean = true;
  showFooter: boolean = true;
  showImprint: boolean = false;
  showPrivacyPolicy: boolean = false;
  showEnglishVersion: boolean = true;
  showGermanVersion: boolean = false;

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let currentRoute = this.route.root;
        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }

        if (currentRoute.snapshot.routeConfig?.path === 'imprint') {
          this.showHeader = true;
          this.showStartscreen = false;
          this.showAbout = false;
          this.showSkills = false;
          this.showPortfolio = false;
          this.showContactMe = false;
          this.showFooter = true;
          this.showImprint = true;
          this.showPrivacyPolicy = false;
        } else if (
          currentRoute.snapshot.routeConfig?.path === 'privacy-policy'
        ) {
          this.showHeader = true;
          this.showStartscreen = false;
          this.showAbout = false;
          this.showSkills = false;
          this.showPortfolio = false;
          this.showContactMe = false;
          this.showFooter = true;
          this.showImprint = false;
          this.showPrivacyPolicy = true;
        } else {
          this.showHeader = true;
          this.showStartscreen = true;
          this.showAbout = true;
          this.showSkills = true;
          this.showPortfolio = true;
          this.showContactMe = true;
          this.showFooter = true;
          this.showImprint = false;
          this.showPrivacyPolicy = false;
        }
      }
    });
  }

  handleToggleLanguage(isEnglish: boolean) {
    this.showEnglishVersion = isEnglish;
    this.showGermanVersion = !isEnglish;

    console.log('Language toggled to: ' + (isEnglish ? 'English' : 'German'));
  }
}

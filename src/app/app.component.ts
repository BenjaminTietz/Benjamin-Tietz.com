import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
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

  ngOnInit() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        let currentRoute = this.route.root;
        while (currentRoute.firstChild) {
          currentRoute = currentRoute.firstChild;
        }

        if (currentRoute.snapshot.routeConfig?.path === 'imprint' || currentRoute.snapshot.routeConfig?.path === 'privacy-policy' ) {
          this.showHeader = true;
          this.showStartscreen = false;
          this.showAbout = false;
          this.showSkills = false;
          this.showPortfolio = false;
          this.showContactMe = false;
          this.showFooter = true;
        } else {
          this.showHeader = true;
          this.showStartscreen = true;
          this.showAbout = true;
          this.showSkills = true;
          this.showPortfolio = true;
          this.showContactMe = true;
          this.showFooter = true;
        }
      }
    });
  }
}

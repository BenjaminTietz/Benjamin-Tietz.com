import { Injectable } from '@angular/core';
import * as AOS from 'aos';

@Injectable({
  providedIn: 'root',
})
export class AosInitService {
  constructor() {}

  public init() {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
      mirror: false, // Whether elements should animate out while scrolling past them
    });
  }
}

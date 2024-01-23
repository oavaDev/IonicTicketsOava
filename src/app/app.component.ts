import {Component,} from '@angular/core';
import { register } from 'swiper/element/bundle';
import {Event, NavigationEnd, Router} from "@angular/router";

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentRoute : string;
  constructor(private router : Router) {
    this.currentRoute = "";
    this.router.events.subscribe((event : Event) => {
      if (event instanceof  NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    })
  }
  showFooter() {
    return this.currentRoute !== "/intro"
  }
}

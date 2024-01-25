import {Component,} from '@angular/core';
import { register } from 'swiper/element/bundle';
import {Event, NavigationEnd, Router} from "@angular/router";
import {Storage} from "@ionic/storage-angular";

register();
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  currentRoute : string;
  constructor(private router : Router,
              private storage : Storage) {
    this.currentRoute = "";
    this.router.events.subscribe((event : Event) => {
      if (event instanceof  NavigationEnd) {
        this.currentRoute = event.urlAfterRedirects;
      }
    })
  }
  async ngOnInit(){
    await this.storage.create();
  }
  showFooter() {
    return !(this.currentRoute === "/intro" || this.currentRoute === "/login");
  }
}

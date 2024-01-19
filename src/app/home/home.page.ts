import {Component} from '@angular/core';
import {OrbitingSlideComponent} from "../component/orbiting-slide/orbiting-slide.component";
import {ISlideComponent} from "../Interfaces/IslideComponent";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  slides :  ISlideComponent[] = [
    {
      title : "Welcome to Tickets.me ",
      description : "We are a service application to manage your ticket without charging any fees, enjoy your hobby freely ",
    },
    {
      title : "Find nearby events",
      description : "We are a service application to manage your ticket without charging any fees, enjoy your hobby freely "
    },
    {
      title : "Stay updated",
      description : "We can follow your favorite events and get notified when they are updated"
    }
  ]
}

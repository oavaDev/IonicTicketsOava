import { Component, OnInit } from '@angular/core';
import {ISlideComponent} from "../Interfaces/IslideComponent";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {
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

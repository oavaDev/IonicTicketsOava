import { Component } from '@angular/core';
import {IslideInterface} from "../../Interfaces/IslideInterface";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage {
  slides :  IslideInterface[] = [
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

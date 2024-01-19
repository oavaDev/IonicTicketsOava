import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage{
  slides  = [
    {
      title : "Welcome to Tickets.me ",
      description : "We are a service application to manage your ticket without charging any fees, enjoy your hobby freely "
    },
    {
      title : "Welcome to Tickets.me ",
      description : "We are a service application to manage your ticket without charging any fees, enjoy your hobby freely "
    }
  ]
}

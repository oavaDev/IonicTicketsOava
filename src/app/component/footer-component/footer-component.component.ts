import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";
import { ChangeDetectionStrategy } from '@angular/core';
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss'],
})
export class FooterComponentComponent {
  @Input() showFooter : boolean = true;
  iconRoutes = [
    {path : 'home', icon : 'home-outline', name : "Home"},
    {path : 'discover', icon : 'compass-outline', name : "Discover"},
    {path : 'tickets', icon : 'ticket-outline' , name : "Tickets"},
    {path : 'settings', icon : 'settings-outline', name: "Settings"},
  ]
  constructor(private router : Router) { }
  navigateToPath(path : string ) {
    this.router.navigate([path]);
  }
}

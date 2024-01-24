import {Component, Input} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.scss'],
})
export class FooterComponentComponent {
  @Input() showFooter : boolean = true;
  iconRoutes = [
    {path : '/home', icon : 'home-outline'},
    {path : '/discover', icon : 'compass-outline'},
    {path : '/tickets', icon : 'ticket-outline'},
    {path : '/settings', icon : 'settings-outline'},
  ]
  constructor(private router : Router) { }
  navigateToPath(path : string ) {
    this.router.navigate([path]);
  }
}

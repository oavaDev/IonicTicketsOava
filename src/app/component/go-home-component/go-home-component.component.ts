import { Component} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-go-home-component',
  templateUrl: './go-home-component.component.html',
  styleUrls: ['./go-home-component.component.scss'],
})
export class GoHomeComponentComponent {

  constructor(private router: Router){
  }
  goHome(){
    localStorage.setItem('introShown', 'true');
    this.router.navigate(['/home']);
  }

}

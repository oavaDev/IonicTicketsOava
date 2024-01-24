import { Component} from '@angular/core';
import {Router} from "@angular/router";
import {Storage} from "@ionic/storage-angular";

@Component({
  selector: 'app-go-home-component',
  templateUrl: './go-home-component.component.html',
  styleUrls: ['./go-home-component.component.scss'],
})
export class GoHomeComponentComponent {

  constructor(private router: Router,
              private storage : Storage){
  }
  goHome(){
    this.storage.set('introShown', true);
    this.router.navigateByUrl('/home');
  }

}

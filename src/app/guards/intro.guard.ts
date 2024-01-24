import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {

  constructor(private  router : Router) {
  }
  canActivate(){
    if(localStorage.getItem('introShown')){
      return true;
    }
    this.router.navigateByUrl('/intro');
    return false;
  }
}

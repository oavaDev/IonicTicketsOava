import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {Storage} from "@ionic/storage-angular";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private router : Router,
              private storage : Storage) {}
  async canActivate(){
    const userLoggedIn = await this.storage.get('userLoggedIn');
    if(userLoggedIn){
      return true;
    }else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}

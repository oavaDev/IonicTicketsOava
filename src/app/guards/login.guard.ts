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
    const token = await this.storage.get('token');
    if(token){
      return true;
    }else{
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}

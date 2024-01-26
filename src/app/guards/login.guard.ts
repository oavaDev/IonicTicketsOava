import { Injectable } from '@angular/core';
import {CanActivate} from '@angular/router';
import {Storage} from "@ionic/storage-angular";
import { NavController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  constructor(private navCtrl : NavController,
              private storage : Storage) {}
  async canActivate() {
    const userLoggedIn = await this.storage.get('userLoggedIn');
    if (userLoggedIn) {
      return true;
    } else {
      this.navCtrl.navigateForward('/login');
      return false;
    }
  }
}

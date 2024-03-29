import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import { Storage } from '@ionic/storage-angular';
@Injectable({
  providedIn: 'root'
})
export class IntroGuard implements CanActivate {
  constructor(private router : Router,
              private storage : Storage) {}
  async canActivate() {
    const mostreIntro = await this.storage.get('introShown');
    if (mostreIntro) {
      return true;
    } else {
      this.router.navigateByUrl('/intro');
      return false;
    }
  }

}

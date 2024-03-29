import { Injectable } from '@angular/core';
import {Storage} from "@ionic/storage-angular";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor( private storage: Storage ) { }
  async getToken(): Promise<string> {
    return await this.storage.get('token');
  }
}

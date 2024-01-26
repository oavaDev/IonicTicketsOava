import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor() { }

  loginUser(credential: any){
    return new Promise((accept, reject) => {
      if(credential.email == "admin@admin.com" && credential.password == "adminadmin"){
        accept('Login success')
      }else{
        reject('Login failed')
      }
    })
  }
}
